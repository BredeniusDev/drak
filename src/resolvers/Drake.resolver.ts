import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Drake, DrakeModel } from '../entites/Drake.entity';
import { CreateDrakeInput, EditDrakeInput } from './types';
import { RyttareModel } from '../entites/Ryttare.entity';

@Resolver(Drake)
export class DrakResolver {
  @Query((returns) => Drake)
  async drake(@Arg('id') id: string) {
    return await DrakeModel.findById(id);
  }

  @Query((returns) => [Drake])
  async drakes() {
    return await DrakeModel.find({});
  }

  @Mutation((returns) => Drake)
  async addDrake(@Arg('createDrake') createDrake: CreateDrakeInput) {
    const ryttare = await RyttareModel.findById(createDrake.ryttareId);
    if (!ryttare) {
      throw new Error('Invalid ryttare ID');
    }
    const drake = await DrakeModel.create(createDrake);
    ryttare.drakar.push(drake);
    await ryttare.save();
    return await DrakeModel.findById(drake.id);
  }

  @Mutation((returns) => Drake)
  async removeDrake(@Arg('id') id: string) {
    let deletedDrake = await DrakeModel.findByIdAndDelete(id);
    if (!deletedDrake) {
      throw new Error('No drake to delete');
    }
    return deletedDrake;
  }

  @Mutation((returns) => Drake)
  async editDrake(@Arg('editDrake') editDrake: EditDrakeInput) {
    await DrakeModel.findByIdAndUpdate(editDrake.id, editDrake);
    return await DrakeModel.findById(editDrake.id);
  }
}
