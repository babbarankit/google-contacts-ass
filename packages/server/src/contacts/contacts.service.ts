import { Injectable, Logger } from '@nestjs/common';
import { get } from 'lodash';
import fetch, { Headers } from 'node-fetch';
import { Contact } from './contact.model';

@Injectable()
export class ContactsService {
  private logger: Logger;
  constructor() {
    this.logger = new Logger('Contact');
  }
  /**
   * Convert Google Profile to Contact DTO
   * @param data Google Contact Resource
   */
  private convertGoogleProfileData(data: any): Contact {
    let contact = new Contact();
    contact.id = data.resourceName;
    contact.name = get(data, 'names[0].displayName');
    contact.email = get(data, 'emailAddresses[0].value');
    contact.profileSrc = get(data, 'photos[0].url');
    contact.phoneNo = get(data, 'phoneNumbers[0].value');
    return contact;
  }
  /**
   * Get Google Profile Data as Contact
   *
   * @param access_token Access Token
   */
  async getGoogleProfileData(access_token: string): Promise<Contact> {
    try {
      const profileUrl =
        'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos,phoneNumbers';
      const profile_res = await fetch(profileUrl, {
        method: 'GET',
        headers: new Headers({
          Authorization: `Bearer ${access_token}`,
        }),
      });
      const data = await profile_res.json();
      if (data.error) {
        throw new Error(data.error_description);
      }
      return this.convertGoogleProfileData(data);
    } catch (err) {
      this.logger.error(err);
      throw new Error(err);
    }
  }
}
