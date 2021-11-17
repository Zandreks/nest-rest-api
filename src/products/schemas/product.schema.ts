import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({
    type:String,
    required:true
  })
  title: string;

  @Prop({
    type:String,
    required:false,
    default:''
  })
  description: string;

  @Prop({
    type:Number,
    required:true
  })
  category: number;

  @Prop({
    type:Number,
    required:true
  })
  amount:number
}

export const ProductSchema = SchemaFactory.createForClass(Product);
