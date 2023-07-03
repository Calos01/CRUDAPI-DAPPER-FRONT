import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceProductoService } from '../service-producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../Models/producto';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit{
  
  formproduct=this.builder.group(
    {
      id:this.builder.control(0,Validators.required),
      nombre:this.builder.control("",Validators.required),
      precio:this.builder.control(0,Validators.required)
    }
  );
  
  id=this.aroute.snapshot.paramMap.get('idprod');
  constructor(private _service:ServiceProductoService, private router:Router, private builder:FormBuilder, private aroute:ActivatedRoute) {
    
  }
  ngOnInit(): void {
    
    this._service.getProductoId(this.id).subscribe((dat:any)=>{
      let datos:any;
      datos=dat;
      this.formproduct.setValue({
        id:datos.id,
        nombre:datos.nombre,
        precio:datos.precio
      })
    })
  }
  guardarProducto(){
    if(this.formproduct.valid){
      this._service.editProduct(this.formproduct.getRawValue()).subscribe((dat:any)=>{
        if(dat=="actualizado correctamente"){
          alert(dat)
          this.router.navigate([''])
        }else{
          alert("error no se guardo")
        }
      })
    }else{
      alert("el formulario no esta validado")
    }
  }
 
}
