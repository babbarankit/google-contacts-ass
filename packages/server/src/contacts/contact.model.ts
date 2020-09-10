import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Contact {
  @Field((type) => String)
  id: string;

  @Field((type) => String, { nullable: true })
  name: string;

  @Field((type) => String, { nullable: true })
  phoneNo: string;

  @Field((type) => String, { nullable: true })
  email: string;

  @Field((type) => String, { nullable: true })
  profileSrc: string;
}
