import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './Models/producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductoService {

  constructor(private http:HttpClient) { }
  link="https://localhost:7080/api/Producto/";

  getProductos(){
    let url=this.link+"Productos"
    return this.http.get<Producto[]>(url);
  }
  getProductoId(id:any){
    let url=this.link+"Producto/"+id;
    return this.http.get<Producto>(url);
  }
  addProducto(product:any){
    let url=this.link+"CreateProduct";
    return this.http.post(url,product,{responseType:'text'});
  }
  editProduct(product:any){
    let url=this.link+"EditProduct";
    return this.http.post(url,product,{responseType:'text'});
  }
  eliminarProduct(id:number){
    let url=this.link+"DeleteProduct/"+id;
    return this.http.post(url,id,{responseType:'text'});
  }
}
