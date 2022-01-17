import {
  DeepPartial,
  DeleteResult,
  FindCondition,
  FindManyOptions,
  FindOneOptions,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { IPagination } from '.';

export interface ICrudService<T> {
  count(filter?: FindManyOptions<T>): Promise<number>;
  findAll(filter?: FindManyOptions<T>): Promise<IPagination<T>>;
  paginate(filter?: FindManyOptions<T>): Promise<IPagination<T>>;
  findOneByIdString(id: string, options?: FindOneOptions<T>): Promise<T>;
  findOneByIdNumber(id: number, options?: FindOneOptions<T>): Promise<T>;
  findOneByConditions(
    id: FindCondition<T>,
    options?: FindOneOptions<T>,
  ): Promise<T>;
  findOneByOptions(options: FindOneOptions<T>): Promise<T>;
  create(entity: DeepPartial<T>, ...options: any[]): Promise<T>;
  update(
    id: any,
    entity: QueryDeepPartialEntity<T>,
    ...options: any[]
  ): Promise<UpdateResult | T>;
  delete(id: any, ...options: any[]): Promise<DeleteResult>;
}
