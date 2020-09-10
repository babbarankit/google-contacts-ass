import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class HealthResolver {
  @Query((returns) => String)
  authenticatedHealth(): string {
    return 'Graphql  Working in Authenticated Mode!';
  }
  @Query((returns) => String)
  anonymousHealth(): string {
    return 'Graphql  Working in Anonymous Mode!';
  }
}
