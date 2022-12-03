import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FoodDocuments = Food & Document;

@Schema()
export class Food {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
