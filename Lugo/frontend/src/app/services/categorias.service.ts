import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor( private httpClient: HttpClient ) { }

  obtenerDetalleCategoria(idCategoria): Observable<any> {
    return this.httpClient.get(`http://localhost:8888/categorias/${idCategoria}/empresas`, {});
    // console.log('Obtener detalle de la categoria seleccionada');
  }
  obtenerCategoria(): Observable<any> {
      // console.log(result);
      return this.httpClient.get('http://localhost:8888/categorias', {});
    }
    // console.log('Obtener categorias');
    guardarCategoria(data: any): Observable<any> {
      return this.httpClient.post(
        'http://localhost:8888/categorias/categoria',
          {
            nombreCategoria: data.nombreCategoria,
            descripcion: data.descripcion,
            color: data.color,
            icono: data.icono
          });
    }
}
