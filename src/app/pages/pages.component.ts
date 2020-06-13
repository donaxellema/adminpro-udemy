import { Component, OnInit } from '@angular/core';

/* 2 Debo declarar una funcion NOTA:ESTA ES UNA MANERA DE COMO LLAMAR SCRIPTS DENTRO DE UN PLUGIN QUE ESTA ECHO EN JQUERY */
declare function init_plugins();


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}
