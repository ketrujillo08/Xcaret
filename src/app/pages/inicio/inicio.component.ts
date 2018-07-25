import { Component, OnInit } from '@angular/core';
import { ToursService } from '../../services/tours.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {
  // Creamos un objeto de tipo de any para no tener problemas con las propiedades de la solicitud.
  tour: any = {};
  // Creamos un arreglo con los atractivos de la solicitud para interactuar de manera independiente con esta información.
  atractivos: any[] = [];

  constructor(public _tourService: ToursService) { }

  ngOnInit() {
    // Mandamos a llamar a nuestro proveedor de servicios declarado en el constructor.
    // Igualamos nuestras variables con la respuesta obtenida.
    this._tourService.getTour().subscribe((res: any) => {
      this.atractivos = res.atractivos;
      this.tour = res;
    });
  }
}
