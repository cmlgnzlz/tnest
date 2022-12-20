import { Injectable } from '@nestjs/common';
import { CreateProdDto } from 'src/dto/create-prod.dto';
import { Producto } from 'src/interfaces/productos/productos.interface';


@Injectable()
export class ProductosService {
    private productos: Producto[] = [];

    getProds(): Producto[] {
        return this.productos;
    }

    postProd(producto: Producto) {
        this.productos.push(producto);
        return this.productos;
    }

    getProdByName(name:string): Producto {
        return this.productos[name]
    }

    putProd(name:string, createProdDto: CreateProdDto):boolean {
        let indice = this.productos.findIndex(i=>i.name == name);
        if (indice >= 0) {
            this.productos[indice] = { ...this.productos[indice], ...createProdDto};
            return true;
        } else {
            return false;
        }
    }

    deleteProd(name:string):boolean {
        let indice = this.productos.findIndex(i=>i.name == name);
        console.log(indice)
        if (indice >= 0){
            console.log("holanda")
            this.productos = this.productos.filter(i=>i.name !== name);
            return true;
        } else {
            return false;
        }
    }
}
