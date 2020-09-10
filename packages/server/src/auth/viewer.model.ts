import { ObjectType } from '@nestjs/graphql';
import { Contact } from '../contacts/contact.model';

@ObjectType()
export class Viewer extends Contact {}
