import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}

function validateRequest(request: any): boolean | Promise<boolean> | Observable<boolean> {
  const token = request.headers['authorization'].split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    request.currentUser = decoded;
  } catch {
    throw new ForbiddenException('Invalid signature');
  }
  return true;
}
