import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Category } from '../../category/schemas/category.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({
    type: String,
    required: true,
  })
  title: string;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  description: string;

  @Prop({ type: [Types.ObjectId], ref: Category.name })
  category: Category[];

  @Prop({
    type: Number,
    required: true,
  })
  amount: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
