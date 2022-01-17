import {
  ArgumentMetadata,
  Injectable,
  NotAcceptableException,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { isEmpty, isUUID } from 'class-validator';

@Injectable()
export class UUIDValidationPipe implements PipeTransform<string> {
  /**
   * Instance of class-validator
   *
   * Can not be easily injected, and there's no need to do so as we
   * only use it for uuid validation method.
   */

  public transform(value: string, metadata: ArgumentMetadata): string {
    if (isEmpty(value)) {
      throw new NotFoundException('Validation failed (uuid is expected)');
    }
    if (!isUUID(value)) {
      throw new NotAcceptableException(
        'Validation failed (valid uuid is expected)',
      );
    }
    return value;
  }
}
