import { Component, OnInit } from '@angular/core';
import { ServiceProductoService } from '../service-producto.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../Models/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  productoid:Producto={
    id:0,
    nombre:'',
    precio:0
  };
  constructor(private _service:ServiceProductoService, private aroute:ActivatedRoute) {   
  }

  ngOnInit(): void {
    let id= this.aroute.snapshot.paramMap.get('idprod');
    this._service.getProductoId(id).subscribe((dat:any)=>{
      this.productoid=dat;
      console.log(dat);
    })
  }


}
