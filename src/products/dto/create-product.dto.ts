import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Min, IsNumber, min } from 'class-validator';
import { CreateCategoryDto } from '../../category/dto/create-category.dto';

export class CreateProductDto {
  @ApiProperty({
    title: 'The name product',
    description: 'The name product',
    type: String,
    default: '',
    minimum: 2,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({
    title: 'The description product',
    description: 'The description product',
    type: String,
    default: '',
    required: false,
  })
  @IsString()
  readonly description: string;

  @ApiProperty({
    title: 'The id category',
    description: 'The id product',
    type: String,
    default: '',
    required: true,
  })
  readonly category: CreateCategoryDto[];

  @ApiProperty({
    title: 'The amount product',
    description: 'The amount product',
    type: Number,
    default: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(2)
  readonly amount: number;
}
