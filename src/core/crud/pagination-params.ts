import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, Max, Min } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';

export enum OrderTypeEnum {
  DESC = 'DESC',
  ASC = 'ASC',
}

export abstract class PaginationParams<T> {
  /**
   * Pagination limit
   */
  @ApiPropertyOptional({ type: () => Number, minimum: 0, maximum: 50 })
  @IsOptional()
  @Min(0)
  @Max(50)
  @Transform((params: TransformFnParams) => parseInt(params.value, 10))
  readonly take = 10;

  /**
   * Pagination offset
   */
  @ApiPropertyOptional({ type: () => Number, minimum: 0 })
  @IsOptional()
  @Min(0)
  @Transform((params: TransformFnParams) => parseInt(params.value, 10))
  readonly skip = 0;

  /**
   * Order by
   */
  @ApiPropertyOptional()
  @IsOptional()
  abstract readonly order?: { [P in keyof T]?: OrderTypeEnum };
}
