import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()



export class SettingsService {


  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  // aqui dentro del constructor cargo los datos guardados en localstorage de manera automatica
  constructor(@Inject( DOCUMENT )private _document) {
    this.cargarAjustes();
  }




  // no te olvides que para crear funciones lo puedes hacer debajo del constructor como en visual studio c++

// guardar en local storage solo guarda en string y lo convertimos en string con jsonstringify
  guardarAjustes() {
    // console.log('Guardado en el Local Storage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

// hago todo lo contrario
  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      // combierto nuevamente en string el json recivido de la llave ajustes
      // console.log('cargando del local storage');
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    } else {
      // console.log('usando valores por defecto');
      this.aplicarTema(this.ajustes.tema);
    }
  }


// crear una funcion para aplicar el tema
aplicarTema(tema: string) {

    const url = 'assets/css/colors/' + tema + '.css';
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    // luego de haber instanciado el servicio ajustes se guardaran los cambios en local storage
    this.guardarAjustes();
}

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
