import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Ryttare, RyttareModel } from '../entites/Ryttare.entity';
import { CreateRyttareInput, EditRyttareInput } from './types/Ryttare.input';

@Resolver(Ryttare)
export class RyttareResolver {
  @Query((returns) => [Ryttare])
  async ryttares() {
    return await RyttareModel.find({});
  }

  @Query((returns) => Ryttare)
  async ryttare(@Arg('id') id: string) {
    return await RyttareModel.findById(id);
  }

  @Mutation((returns) => Ryttare)
  async addRyttare(@Arg('newRyttareData') newRyttareData: CreateRyttareInput) {
    return await RyttareModel.create(newRyttareData);
  }

  @Mutation((returns) => Ryttare)
  async removeRyttare(@Arg('id') id: string) {
    const deletedRyttare = await RyttareModel.findByIdAndDelete(id);
    if (!deletedRyttare) {
      // TODO: Throw an error
    }
    return deletedRyttare;
  }

  @Mutation((returns) => Ryttare)
  async editRyttare(@Arg('editDrakeData') editRyttare: EditRyttareInput) {
    await RyttareModel.findByIdAndUpdate(editRyttare.id, editRyttare);
    return await RyttareModel.findById(editRyttare.id);
  }
}
