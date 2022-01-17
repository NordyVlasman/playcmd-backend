import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ICrudService, IPagination } from 'src/interfaces';
import {
  DeepPartial,
  DeleteResult,
  FindCondition,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
  Repository,
  SelectQueryBuilder,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BaseEntity } from '../base.entity';
import * as moment from 'moment';
import { filterQuery } from './query-builder';

export abstract class CrudService<T extends BaseEntity>
  implements ICrudService<T>
{
  protected constructor(protected readonly repository: Repository<T>) {}

  public async count(filter?: FindManyOptions<T>): Promise<number> {
    return await this.repository.count(filter);
  }

  public async findAll(filter?: FindManyOptions<T>): Promise<IPagination<T>> {
    const total = await this.repository.count(filter);
    const items = await this.repository.find(filter);
    return { items, total };
  }

  public async paginate(filter?: any): Promise<IPagination<T>> {
    try {
      const options: FindManyOptions = {};
      options.skip =
        filter && filter.skip ? filter.take * (filter.skip - 1) : 0;
      options.take = filter && filter.take ? filter.take : 10;
      if (filter) {
        if (filter.orderBy && filter.order) {
          options.order = {
            [filter.orderBy]: filter.order,
          };
        } else if (filter.orderBy) {
          options.order = filter.orderBy;
        }
        if (filter.relations) {
          options.relations = filter.relations;
        }
        if (filter.join) {
          options.join = filter.join;
        }
      }
      options.where = (qb: SelectQueryBuilder<T>) => {
        if (filter && (filter.filters || filter.where)) {
          if (filter.where) {
            const wheres: any = {};
            for (const field in filter.where) {
              if (Object.prototype.hasOwnProperty.call(filter.where, field)) {
                wheres[field] = filter.where[field];
              }
            }
            filterQuery(qb, wheres);
          }
        }
        console.log(
          qb.getQueryAndParameters(),
          moment().format('DD.MM.YYYY HH:mm:ss'),
        );
      };
      console.log(filter, moment().format('DD.MM.YYYY HH:mm:ss'));
      const [items, total] = await this.repository.findAndCount(options);
      return { items, total };
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  findOneByIdString(id: string, options?: FindOneOptions<T>): Promise<T> {
    throw new Error('Method not implemented.');
  }
  findOneByIdNumber(id: number, options?: FindOneOptions<T>): Promise<T> {
    throw new Error('Method not implemented.');
  }
  findOneByConditions(
    id: FindCondition<T>,
    options?: FindOneOptions<T>,
  ): Promise<T> {
    throw new Error('Method not implemented.');
  }
  findOneByOptions(options: FindOneOptions<T>): Promise<T> {
    throw new Error('Method not implemented.');
  }

  public async create(entity: DeepPartial<T>, ...options: any[]): Promise<T> {
    const obj = this.repository.create(entity);
    try {
      return await this.repository.save(obj as any);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  public async update(
    id: string | number | FindConditions<T>,
    partialEntity: QueryDeepPartialEntity<T>,
    ...options: any[]
  ): Promise<UpdateResult | T> {
    try {
      return await this.repository.update(id, partialEntity);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  public async delete(
    critiria: string | number | FindConditions<T>,
    ...options: any[]
  ): Promise<DeleteResult> {
    try {
      return await this.repository.delete(critiria);
    } catch (error) {
      console.log(error);
      throw new NotFoundException('The record whas not found');
    }
  }
}
