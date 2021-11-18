import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch()
export class BadRequestFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse();
    res.status(400).json({ exception });
  }
}
