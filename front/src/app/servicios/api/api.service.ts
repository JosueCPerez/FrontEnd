import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

interface pedido {
  id:number,
  total:number,
  estado:string
}

interface respuesta {
  text:string,
  id:number
}

interface respuesta_estado {
  text:string,
  estado:string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url_cliente:string = 'http://localhost:5000/cliente/';
  url_res:string = 'http://localhost:5002/restaurante';
  url_entrega:string = 'http://localhost:5001/entrega/';

  constructor(private http:HttpClient) { }
  //*********************** Correografia ******************* */
  //cliente
  agregar_pedido_correografia(pedidos:any){
    return this.http.post<respuesta>(`${this.url_cliente}pedido`, pedidos);
  }

  get_estado_cliente(id:number){
    return this.http.get<respuesta_estado>(`http://localhost:5000/cliente/pedido/`+id);
  }

  //restaurante
  get_pedidos(){
    return this.http.get<pedido[]>(`${this.url_res}/pedidos`);
   }

  cambiar_estado_correografia(id:number){
    var estado={
      "estado":"TERMINADO"
    }
    return this.http.put(`http://localhost:5002/restaurante/estado/`+id, estado);
  }
  cambiar_envio_correografia(id:number){
    return this.http.get(`http://localhost:5002/restaurante/envio/`+id);
  }

  get_estado_pedido(id:number){
    return this.http.get<respuesta_estado>(`http://localhost:5002/restaurante/pedido/`+id);
  }
  

  //repartidor
  get_pedido_repartidor_correografia(id:number){
    return this.http.get(`http://localhost:5001/repartidor/entrega/listo/`+id);
  }

  get_estado_pedido_repartidor(id:number){
    return this.http.get<respuesta_estado>(`http://localhost:5001/repartidor/entrega/`+id);
  }

  //*********************** Orquestacion ******************* */
//cliente
agregar_pedido_orq(pedidos:any){
  return this.http.post<respuesta>(`http://localhost:5003/cliente/pedido`, pedidos);
}

get_estado_cliente_orq(id:number){
  return this.http.get<respuesta_estado>(`http://localhost:5003/cliente/pedido/`+id);
}

//restaurante
get_pedidos_orq(){
  return this.http.get<pedido[]>(`${this.url_res}/pedidos`);
 }

cambiar_estado_orq(id:number){
  var estado={
    "estado":"TERMINADO"
  }
  return this.http.put(`http://localhost:5003/restaurante/estado/`+id, estado);
}
cambiar_envio_orq(id:number){
  return this.http.get(`http://localhost:5003/restaurante/envio/`+id);
}

get_estado_pedido_orq(id:number){
  return this.http.get<respuesta_estado>(`http://localhost:5003/restaurante/pedido/`+id);
}


//repartidor
get_pedido_repartidor_orq(id:number){
  return this.http.get(`http://localhost:5003/repartidor/entrega/listo/`+id);
}

get_estado_pedido_repartidor_orq(id:number){
  return this.http.get<respuesta_estado>(`http://localhost:5003/repartidor/entrega/`+id);
}
}
