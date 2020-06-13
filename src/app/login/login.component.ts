import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* 2 Debo declarar una funcion (no una variable) */
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// como vamos a navegar dentro del router se debe importarlo dentro del constructor
  constructor(public router: Router) { }

  ngOnInit(): void {
    /* 1 Debo llamar la funcion al momento en que se inicia*/
    init_plugins();
  }

ingresar() {
console.log('Ingresando');
// el navigater recive un array de la ruta
this.router.navigate(['/dashboard']);
}

}
