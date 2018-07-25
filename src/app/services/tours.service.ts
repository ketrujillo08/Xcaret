import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { URL_SERVICIO } from '../config/config';

@Injectable()
export class ToursService {

  constructor(public _http: HttpClient) { }
  // Simplemente creamos una función den la clase para retornar lo solicitado en la tarea.
  // En caso de que la solicitud HTTP sea correcta devolveremos lo que tenga el arreglo.
  // De lo contrario haremos que en la consola aparezca el error de la petición.
  getTour() {
    return this._http.get(URL_SERVICIO)
      .map((res: any) => {
        return res[0];
      })
      .catch(err => {
        throw err;
      });
  }

}
