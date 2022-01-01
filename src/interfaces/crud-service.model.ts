import {
  DeepPartial,
  DeleteResult,
  FindManyOptions,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { IPagination } from '.';

export interface ICrudService<T> {
  count(filter?: FindManyOptions<T>): Promise<number>;
  findAll(filter?: FindManyOptions<T>): Promise<IPagination<T>>;
  paginate(filter?: FindManyOptions<T>): Promise<IPagination<T>>;
  create(entity: DeepPartial<T>, ...options: any[]): Promise<T>;
  update(
    id: any,
    entity: QueryDeepPartialEntity<T>,
    ...options: any[]
  ): Promise<UpdateResult | T>;
  delete(id: any, ...options: any[]): Promise<DeleteResult>;
}
