import { Component, OnInit } from '@angular/core';
import { ServiceProductoService } from '../service-producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../Models/producto';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit{
  
  constructor(private _service:ServiceProductoService, private router:Router, private builder:FormBuilder) {
    
  }
  formproduct=this.builder.group(
    {
      nombre:this.builder.control('',Validators.required),
      precio:this.builder.control(0,Validators.required)
    }
  )
  ngOnInit(): void {
    
  }
  AgregarProducto(){
    if(this.formproduct.valid){
      this._service.addProducto(this.formproduct.getRawValue()).subscribe((dat:any)=>{
        if(dat=="creado correctamente"){
          alert(dat);
          this.router.navigate(['']);
        }
        else{
          alert("Error no se envio")
        }
     })
    }else{
      alert("Error el form no esta validado")
    }
  }
}
