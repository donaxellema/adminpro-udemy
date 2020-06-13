
import { Component } from '@angular/core';

// *para contonuar con la importacion del service.index.ts ya no usare la linea de codigo de settings service sino la de serives.index /
// import { SettingsService } from './services/settings/settings.service';
// importo los servicios
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'adminpro';
  // creao un constructor para cargar (disparar) los cambios almacenados en local storage
  // despues debo injectar el servicesttings
  constructor(public _ajustes : SettingsService) {
    // cuando el serivico sea injectado autimaticamente se dispare la funcion de cargar ajustes
  }
}
