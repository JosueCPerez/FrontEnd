import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../servicios/api/api.service'

import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ir_cliente(){
    var tipo = localStorage.getItem("tipo");
    if(tipo == null){
      alert("no se a seleccionado un tipo de consulta al servidor")
    }else{
      if(tipo == "1"){
        alert("Se consultara por Orquestacion");
      }else if(tipo == "2"){
        alert("Se consultara por Coreografia");
      }
    }
    this.router.navigate(['cliente']);
  }

  ir_restaurante(){
    var tipo = localStorage.getItem("tipo");
    if(tipo == null){
      alert("no se a seleccionado un tipo de consulta al servidor")
    }else{
      if(tipo == "1"){
        alert("Se consultara por Orquestacion");
      }else if(tipo == "2"){
        alert("Se consultara por Coreografia");
      }
    }
    this.router.navigate(['restaurante']);
  }

  ir_entrega(){
    var tipo = localStorage.getItem("tipo");
    if(tipo == null){
      alert("no se a seleccionado un tipo de consulta al servidor")
    }else{
      if(tipo == "1"){
        alert("Se consultara por Orquestacion");
      }else if(tipo == "2"){
        alert("Se consultara por Coreografia");
      }
    }
    this.router.navigate(['entrega']);
  }

  tipo_ejecucion(data:any){
    localStorage.setItem("tipo",data);
  }

}
