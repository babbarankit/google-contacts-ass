import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Contact } from './contact.model';

@ObjectType()
export class ContactConnection {
  constructor(data: ContactConnection) {
    this.total = data.total;
    this.cursor = data.cursor;
    this.edges = data.edges;
  }
  @Field((type) => Int)
  total: number;

  @Field((type) => String, { nullable: true })
  cursor: string;

  @Field((type) => [Contact], { nullable: true })
  edges: Contact[];
}
