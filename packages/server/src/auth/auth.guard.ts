import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ForbiddenError } from 'apollo-server-core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const viewer = ctx.getContext().viewer;
    if (viewer.id !== 'anonymous') {
      return true;
    }
    throw new ForbiddenError('User Has Unsufficent Permissions.');
  }
}
