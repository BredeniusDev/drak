import { Prop, getModelForClass } from '@typegoose/typegoose';
import { Field, ID, ObjectType } from 'type-graphql';
import { Drake } from './Drake.entity';
import { Types } from 'mongoose';

@ObjectType()
export class Ryttare {
  @Field((type) => ID)
  readonly id!: Types.ObjectId;

  @Field()
  @Prop({ required: true })
  ryttarenummer!: string;

  @Field((type) => [Drake])
  @Prop({ type: () => Drake, default: [] })
  drakar!: Drake[];
}

export const RyttareModel = getModelForClass(Ryttare);
