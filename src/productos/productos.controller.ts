import { Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { CreateProdDto } from 'src/dto/create-prod.dto';
import { Producto } from 'src/interfaces/productos/productos.interface';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    @Get()
    async getProds(): Promise<Producto[]> {
        return this.productosService.getProds();
    }

    @Post()
    async postProd(@Body() createProdDto: CreateProdDto) {
        return this.productosService.postProd(createProdDto);
    }

    @Get(':name')
    async getProdByName(@Param('name') name:string) {
        return this.productosService.getProdByName(name);
    }

    @Put(':name')
    async putProd(@Param('name') name:string, @Body() createProdDto: CreateProdDto) {
        return this.productosService.putProd(name,createProdDto);
    }

    @Delete(':name')
    async deleteProd(@Param('name') name:string) {
        return this.productosService.deleteProd(name);
    }

}