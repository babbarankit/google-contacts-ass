import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactResolver } from './contact.resolver';

@Module({
  providers: [ContactsService, ContactResolver],
  exports: [ContactsService],
})
export class ContactModule {}
