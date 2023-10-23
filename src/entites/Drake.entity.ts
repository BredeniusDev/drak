import { Prop, getModelForClass } from '@typegoose/typegoose';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Drake {
  @Field((type) => ID)
  id!: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  draknummer!: string;
}

export const DrakeModel = getModelForClass(Drake);
