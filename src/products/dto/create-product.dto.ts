import { ApiProperty } from '@nestjs/swagger';

export  class CreateProductDto {
  @ApiProperty({
    title:'The name product',
    description: 'The name product',
    type:String,
    default: '',
    minimum:2,
    required:true,
  })
  readonly title:string

  @ApiProperty({
    title:'The description product',
    description: 'The description product',
    type:String,
    default: '',
    required:false,
  })
  readonly description:string
  @ApiProperty({
    title:'The id category',
    description: 'The id product',
    type:Number,
    default: 1,
    required:true,
  })
  readonly category:number
  @ApiProperty({
    title:'The amount product',
    description: 'The amount product',
    type:Number,
    default: 1,
    required:true,
  })
  readonly amount:number
}
