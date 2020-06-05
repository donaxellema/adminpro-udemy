import { Component, Input , Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {
  // decorador para nombres compartidos dentro de los elementos del html
  // este decorador recive un parametro obligatoriamente
  @ViewChild('txtPorcentaje') txtPorcentaje: ElementRef;


  // para recibir valores se ubicaria @input
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();


  constructor() {
    // console.log('Leyenda ', this.leyenda);
    // console.log('Leyenda ', this.porcentaje);
  }

  ngOnInit(): void {
    console.log('Leyenda ', this.porcentaje);
  }



// funcion que cree conforme al tuto
onChanges(newValue: number ) {
  let elemHTML: any = {};
  // elemHTML = document.getElementsByName('porcentaje')[0];
  // console.log( elemHTML.value ); ya no usaria vanila javascript para obtener elementos
  // console.log(this.txtPorcentaje);


  if(newValue >= 100){
    this.porcentaje = 100;
  } else if (newValue <= 0) {
    this.porcentaje = 0;
  } else {
    this.porcentaje = newValue;
  }
  /*castaer valor de html*/
  // elemHTML.value = Number(this.porcentaje);
  // elemHTML.value = this.porcentaje;
  this.txtPorcentaje.nativeElement.value = this.porcentaje;
  this.cambioValor.emit(this.porcentaje);
  console.log('Value es = ' + elemHTML.value);
}






  cambiarValor(valor: number) {
    if (this.porcentaje >= 100  && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0 ) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    /*la linea de abajo emite el nuevo valor de la variable es como si fuera una igualacion*/
    this.cambioValor.emit(this.porcentaje);

    this.txtPorcentaje.nativeElement.focus();

  }
}
