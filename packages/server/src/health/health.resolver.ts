import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Resolver()
export class HealthResolver {
  @UseGuards(AuthGuard)
  @Query((returns) => String, { description: 'Check Authenticated Access' })
  authenticatedHealth(): string {
    return 'Graphql  Working in Authenticated Mode!';
  }
  @Query((returns) => String, { description: 'Check Health of GraphQL Service' })
  anonymousHealth(): string {
    return 'Graphql  Working in Anonymous Mode!';
  }
}
