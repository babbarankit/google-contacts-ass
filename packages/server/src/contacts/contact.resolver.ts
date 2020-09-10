import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ContactResolver {
  @Query()
  getContactRelationships() {}
}
