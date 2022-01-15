import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../../servicios/api/api.service'

interface pedido {
    id:number,
    total:number,
    estado:string
  }

@Component({
  selector: 'app-entrga',
  templateUrl: './entrga.component.html',
  styleUrls: ['./entrga.component.css']
})
export class EntrgaComponent implements OnInit {
  public url="";
  public pedidos:pedido[] = [];
  constructor(private router:Router,private service:ApiService) { }

  ngOnInit(): void {
    var tipo = localStorage.getItem("tipo");
    if(tipo == "2"){
      this.url="http://localhost:5002/restaurante/pedidos";
    }else{
      this.url="http://localhost:5003/restaurante/pedidos";
    }
    
    this.actualizar();
  }
  actualizar(){
    var respuesta =this.service.get_pedidos().subscribe((data:pedido[])=>{
      console.log(data);
      this.pedidos=data;
    });
  }
  cambiar_estado(indice:any){
    //cambiar estado en el servidor
    for(let i=0; i< this.pedidos.length;i++){
        if(i==indice){
          if(this.pedidos[i].estado == "EN CAMINO"){
            this.cambiar_estado_entrega(this.pedidos[i].id);
          }
        }
    }
  }

  cambiar_estado_entrega(id:number, ){
    var tipo = localStorage.getItem("tipo");

    if(tipo == "2"){//correografia 2
      var respuesta=this.service.get_pedido_repartidor_correografia(id).subscribe();
      console.log(respuesta);
      this.actualizar();
      this.url="http://localhost:5001/repartidor/entrega/listo/"+id;
    }else{ //orquestacion 1
      var respuesta=this.service.get_pedido_repartidor_orq(id).subscribe();
      console.log(respuesta);
      this.actualizar();
      this.url="http://localhost:5003/repartidor/entrega/listo/"+id;
    }
  }

  ver_estado(i:any){
    localStorage.setItem("id_pedido",i);
    this.router.navigate(['estadoEntrega']);
  }
  inicio(){
    this.router.navigate(['login']);
  }
}
