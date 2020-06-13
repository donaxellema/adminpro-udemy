import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent implements OnInit {
// Otra manera de acceder al dom aparte de vanilla javascript es inject the document


/*importo el servicio seguido del document para acceder al localstorage como variable publica en este caso*/
// anteriormente antes de que se cambiara la inject al constructor de settings.service
 // constructor(@Inject( DOCUMENT )private _document, public _ajustes: SettingsService ) { }
  constructor(public _ajustes: SettingsService ) { }

  ngOnInit(): void {
    this.colocarcheck();
  }

  cambiarColor(tema: string, link: any) {
    console.log(tema);
    this.aplicarcheck(link);
    // se comenta para ubicarlo dentro de aplicar tema de la funcion que esta dentro de servicesSettings

    /*const url = 'assets/css/colors/' + tema + '.css';
    this._document.getElementById('tema').setAttribute('href', url);

    this._ajustes.ajustes.tema = tema;
    this._ajustes.ajustes.temaUrl = url;
    // luego de haber instanciado el servicio ajustes se guardaran los cambios en local storage
    this._ajustes.guardarAjustes();*/

    // aqui ya solo aplico la funcion que se define en el servicesttings
    this._ajustes.aplicarTema(tema);

  }

  aplicarcheck( link: any ){
    const selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  colocarcheck() {
    // para obetener todo el array de los selectores que comparten esa clase
    const selectores: any = document.getElementsByClassName('selector');

    const tema = this._ajustes.ajustes.tema;

    for (let ref of selectores ) {
      if (ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;

      }
    }
  }

}
