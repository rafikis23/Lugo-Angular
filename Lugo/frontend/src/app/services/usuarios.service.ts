import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  obtenerUsuarios(): Observable<any> {
    return this.httpClient.get('http://localhost:8888/usuarios/', {});
    // console.log('Obtener todos los usuarios');
  }
  obtenerPedidos(idUsuario): Observable<any> {
    return this.httpClient.get(`http://localhost:8888/usuarios/${idUsuario}/ordenes`, {});
    // console.log('Obtener los pedidos de un usuario');
  }
  realizarPedidoNuevo(pedido: any): Observable<any> {
    return this.httpClient.post(`http://localhost:8888/usuarios/${pedido.idUsuario}/orden`,
    {
      nombreProducto: pedido.nombreProducto,
      descripcion: pedido.descripcion,
      cantidad: pedido.cantidad,
      precio: pedido.precio
    });
  }
}
