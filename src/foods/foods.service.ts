import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Food, FoodDocuments } from './entities/food.entity';

@Injectable()
export class FoodsService {
  constructor(
    @InjectModel(Food.name) private foodModel: Model<FoodDocuments>,
  ) {}

  create(createFoodDto: CreateFoodDto) {
    const food = new this.foodModel(createFoodDto);
    return food.save();
  }

  findAll() {
    return this.foodModel.find();
  }

  findOne(id: string) {
    return this.foodModel.findById(id);
  }

  update(id: string, updateFoodDto: UpdateFoodDto) {
    return this.foodModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateFoodDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.foodModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
