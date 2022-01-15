import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

import { ApiService } from '../../servicios/api/api.service'

interface pedido {
  total:number,
  menus:any[]
}

interface respuesta {
  text:string,
  id:number
}

interface menu {
  nombre:string,
  precio:number,
  cantidad:number
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {
  public isCollapsed = true;
  constructor(private router:Router, private service:ApiService) { }

  public carrito : menu[] = [];
  combo:any="";
  precio:number=0;
  public cantidad:any=0;
  public url="";
  id_actual:number=0;

  ngOnInit(): void {
  }

  agregar_carrito(){
    const nuevo:menu = {
      nombre:this.combo,
      precio:this.precio,
      cantidad:this.cantidad
    }

    this.carrito.push(nuevo);
  }

  guardar_temp(menu:any,precio:number){
    this.combo = menu;
    this.precio=precio;
    //alert("menu="+this.combo+"\nprecio="+this.precio);
  }
  completar_compra(){
    console.log(this.carrito)

    var total_:number =0;
    for(let item of this.carrito){
      total_+= item.precio * item.cantidad;
    }
    
    const pedidos:pedido = {
      total:total_,
      menus:this.carrito
    }

    console.log(pedidos);
    alert("se realizo su pedido");
    var tipo = localStorage.getItem("tipo");
    //orquestacion 1
    //correografia 2
    if(tipo == "2"){
      this.url="http://localhost:5000/cliente/pedido";
      this.service.agregar_pedido_correografia(pedidos).subscribe((data:respuesta) => {
        alert(data);
        console.log(data);
        this.id_actual = data.id;
      });
    }else{
      this.url="http://localhost:5003/cliente/pedido";
      this.service.agregar_pedido_orq(pedidos).subscribe((data:respuesta) => {
        alert(data);
        console.log(data);
        this.id_actual = data.id;
      });
    }
  }

  ver_pedido(){
    localStorage.setItem("id_pedido",this.id_actual.toString());
    this.router.navigate(['estado']);
  }
  inicio(){
    this.router.navigate(['login']);
  }
}
