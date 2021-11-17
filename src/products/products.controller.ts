import { Controller, Get, Post, Body, Put, Param, Delete, UseFilters } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiParam } from '@nestjs/swagger';
import { Product } from './schemas/product.schema';
import { HttpExceptionFilter } from '../http-exception.filter';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  create(@Body() createProductDto: CreateProductDto):Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @UseFilters(new HttpExceptionFilter())
  findAll():Promise<Product[]> {
    return this.productsService.findAll();
  }
  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  @ApiParam({ name: 'id', type:String, required:true,description:'This id product' })
  findOne(@Param('id') id: string):Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  @UseFilters(new HttpExceptionFilter())
  @ApiParam({ name: 'id', type:String, required:true,description:'This id product' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto):Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @UseFilters(new HttpExceptionFilter())
  @ApiParam({ name: 'id', type:String, required:true,description:'This id product' })
  remove(@Param('id') id: string):Promise<Product> {
    return this.productsService.remove(id);
  }
}
