import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateDrakeInput {
  @Field({ nullable: false })
  draknummer!: string;
  @Field()
  ryttareId!: string;
}

@InputType()
export class EditDrakeInput {
  @Field({ nullable: false })
  id!: string;
  @Field({ nullable: false })
  draknummer!: string;
  @Field()
  ryttareId!: string;
}
