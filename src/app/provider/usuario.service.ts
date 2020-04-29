import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: any;

  constructor() { }

  getUsuario(){
    return this.usuario;

  }

  setUsuario(usuario1:any){
    this.usuario = usuario1;
  }
}
