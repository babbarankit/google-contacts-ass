import { Resolver, Query, Context } from '@nestjs/graphql';
import { ContactsService } from './contacts.service';
import { ContactConnection } from './contact-connection.model';

@Resolver()
export class ContactResolver {
  constructor(private readonly service: ContactsService) {}

  @Query((returns) => ContactConnection, { description: 'Get Contacts Relationships Connection' })
  getContactRelationshipsConnection(@Context('ctx') ctx: any): Promise<ContactConnection> {
    return this.service.getGoogleProfileRelationshipData(ctx.googleAccessToken);
  }
}
