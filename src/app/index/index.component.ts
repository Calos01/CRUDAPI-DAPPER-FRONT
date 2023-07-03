import { Component, OnInit } from '@angular/core';
import { ServiceProductoService } from '../service-producto.service';
import { Producto } from '../Models/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  productos:Producto[]=[]
  constructor(private _service:ServiceProductoService,private router:Router) {
    
  }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this._service.getProductos().subscribe((dat:any)=>{
      this.productos=dat;
      console.log(dat);
    })
  }
  detallesProduct(id:any){
    this.router.navigate(['detalle',id]);
  }
  agregarProduct(){
    this.router.navigate(['create']);
  }
  editProduct(id:any){
    this.router.navigate(['edit',id]);
  }
  deleteProduct(id:any){
    this._service.eliminarProduct(id).subscribe((dat:any)=>{
      if(dat=="eliminado correctamente"){
        alert(dat);
        this.getProducts();
      }else{
        alert("Error no se pudo eliminar");
      }
    })
  }
}
