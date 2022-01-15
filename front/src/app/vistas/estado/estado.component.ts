import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../../servicios/api/api.service'

interface respuesta {
  text:string,
  estado:string
}

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
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
      this.url="http://localhost:5000/cliente/pedido/"+this.id_pedido;
      this.service.get_estado_cliente(parseInt(this.id_pedido,10)).subscribe((data:respuesta) => {
        //alert(data);
        console.log(data);
        this.actualizar_tracker(data);
      });
    }else{
      this.url="http://localhost:5003/cliente/pedido/"+this.id_pedido;
      this.service.get_estado_cliente_orq(parseInt(this.id_pedido,10)).subscribe((data:respuesta) => {
        //alert(data);
        console.log(data);
        this.actualizar_tracker(data);
      });
    }
  }

  actualizar_tracker(data:respuesta){
    if(data.estado == "PEDIDO EXITOSO"){
      this.activo_1 ="step active"
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
