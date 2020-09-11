import { Resolver, Query, Context, Args, Int } from '@nestjs/graphql';
import { ContactsService } from './contacts.service';
import { ContactConnection } from './contact-connection.model';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ForbiddenError } from 'apollo-server-express';

@Resolver()
export class ContactResolver {
  constructor(private readonly service: ContactsService) {}

  @UseGuards(AuthGuard)
  @Query((returns) => ContactConnection, { description: 'Get Contacts Relationships Connection' })
  getContactRelationshipsConnection(
    @Context('ctx') ctx: any,
    @Args('limit', { nullable: true, type: () => Int }) limit: number,
    @Args('cursor', { nullable: true, type: () => String }) cursor: string,
  ): Promise<ContactConnection> {
    if (!ctx.googleAccessToken) {
      throw new ForbiddenError('Not Authenticated Via Google');
    }
    return this.service.getGoogleProfileRelationshipData(ctx.googleAccessToken, limit, cursor);
  }
}
