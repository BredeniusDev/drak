import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateRyttareInput {
  @Field()
  ryttarenummer!: string;
}

@InputType()
export class EditRyttareInput {
  @Field()
  id!: string;
  @Field()
  ryttarenummer!: string;
}
