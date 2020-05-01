import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: any;
  public url = 'http://www.mocky.io/v2/5ea8e7e02d000097883a4159'; //lugares
  public url2 = 'http://www.mocky.io/v2/5ea9a16d340000980d3f06e4'; //sintomas

  constructor(private http: HttpClient) { }

  getLugares(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getSintomas(): Observable<any> {
    return this.http.get<any>(this.url2);
  }

  getUsuario() {
    return this.usuario;

  }

  setUsuario(usuario1: any) {
    this.usuario = usuario1;
  }
}
