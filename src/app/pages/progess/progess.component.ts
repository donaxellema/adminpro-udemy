import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progess',
  templateUrl: './progess.component.html',
  styles: []
})
export class ProgessComponent implements OnInit {

  porcentaje1: number = 20;
  porcentaje2: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

  /*creo una funcion para aumetar el valor de la barra de progreso*/
  /*cambiarValor(valor: number) {
    if (this.porcentaje >= 100  && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0 ) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
  }*/


/*
  actulizar(event: number ) {
    console.log('Evento: ', event);
    this.porcentaje1=event;
  }*/

}
