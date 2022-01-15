import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../../servicios/api/api.service'

interface pedido {
    id:number,
    total:number,
    estado:string
  }

const PEDIDOS: pedido[] = [
  {
    id: 1,
    total: 120,
    estado:"Pedido Exitoso"
  },
  {
    id: 2,
    total: 250,
    estado:"Pedido Exitoso"
  },
  {
    id: 3,
    total: 50,
    estado:"Pedido Exitoso"
  },
];

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {
  public pedidos:pedido[] = [];
  constructor(private router:Router,private service:ApiService) { }
  public url="";
  public boton="btn btn-outline-primary";
  
  ngOnInit(): void {
    this.actualizar();
  }
  actualizar(){
    var respuesta =this.service.get_pedidos().subscribe((data:pedido[])=>{
      console.log(data);
      this.pedidos=data;
    });
  }

  inicio(){
    this.router.navigate(['login']);
  }

  cambiar_estado(indice:any){
    //cambiar estado en el servidor
    for(let i=0; i< this.pedidos.length;i++){
        if(i==indice){
          if(this.pedidos[i].estado == "PEDIDO EXITOSO"){
            this.cambiar_estado_servidor(this.pedidos[i].id);
          }else if(this.pedidos[i].estado == "TERMINADO"){
            this.cambiar_estado_envio(this.pedidos[i].id);
          }
        }
    }
  }

  cambiar_estado_servidor(id:number, ){
    var tipo = localStorage.getItem("tipo");
    
    if(tipo == "2"){//correografia 2
      this.url="http://localhost:5002/restaurante/estado/"+id;
      var respuesta=this.service.cambiar_estado_correografia(id).subscribe();
      console.log(respuesta);
      this.actualizar();
    }else{ //orquestacion 1
      
      this.url="http://localhost:5003/restaurante/estado/"+id;
      var respuesta=this.service.cambiar_estado_orq(id).subscribe();
      console.log(respuesta);
      this.actualizar();
    }
  }

  cambiar_estado_envio(id:number, ){
    var tipo = localStorage.getItem("tipo");
    
    if(tipo == "2"){//correografia 2
      this.url="http://localhost:5002/restaurante/envio/"+id;
      console.log(this.url);
      var respuesta=this.service.cambiar_envio_correografia(id).subscribe();
      console.log(respuesta);
      this.actualizar();
      
    }else{ //orquestacion 1
      this.url="http://localhost:5003/restaurante/envio/"+id;
      console.log(this.url);
      var respuesta=this.service.cambiar_envio_orq(id).subscribe();
      console.log(respuesta);
      this.actualizar();
    }
  }

  ver_estado(i:any){
    localStorage.setItem("id_pedido",i);
    this.router.navigate(['estadoRes']);
  }
}
