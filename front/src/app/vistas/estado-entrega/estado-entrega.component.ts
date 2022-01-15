import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { ApiService } from '../../servicios/api/api.service'

interface respuesta {
  text:string,
  estado:string
}

@Component({
  selector: 'app-estado-entrega',
  templateUrl: './estado-entrega.component.html',
  styleUrls: ['./estado-entrega.component.css']
})

export class EstadoEntregaComponent implements OnInit {

  public activo_1="step";
  public activo_2="step";
  public activo_3="step";
  public activo_4="step";
  public url ="";
  constructor(private router:Router, private service:ApiService) { }
  public id_pedido = "";
  tipo = localStorage.getItem("tipo");
  ngOnInit(): void {
    this.id_pedido = this.get_id();
    //consultar al servidor el pedido del cliente
    if(this.tipo=="2"){
      this.url="http://localhost:5001/repartidor/entrega/"+this.id_pedido;
      this.service.get_estado_pedido_repartidor(parseInt(this.id_pedido,10)).subscribe((data:respuesta) => {
        alert(data);
        console.log(data);
        this.actualizar_tracker(data);
      });
    }else{
      this.url="http://localhost:5003/repartidor/entrega/"+this.id_pedido;
      this.service.get_estado_pedido_repartidor_orq(parseInt(this.id_pedido,10)).subscribe((data:respuesta) => {
        alert(data);
        console.log(data);
        this.actualizar_tracker(data);
      });
    }
  }

  actualizar_tracker(data:respuesta){
    if(data.estado == "PEDIDO EXITOSO"){
      this.activo_1 ="step active"
    }else if(data.estado == "TERMINADO"){
      this.activo_1 ="step active"
      this.activo_2 ="step active"
    }else if(data.estado == "EN CAMINO"){
      this.activo_1 ="step active"
      this.activo_2 ="step active"
      this.activo_3 ="step active"
    }else if(data.estado == "ENTREGADO"){
      this.activo_1 ="step active"
      this.activo_2 ="step active"
      this.activo_3 ="step active"
      this.activo_4 ="step active"
    }
  }

  get_id(){
    var id = localStorage.getItem("id_pedido");
    if(id != null){
      return id;
    }else{
      return ""
    }
  }

  inicio(){
    this.router.navigate(['login']);
  }

}
