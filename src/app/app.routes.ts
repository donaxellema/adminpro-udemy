/* se usa asi pero debo importar las */
/* import { Routes } from '@angular/router'; */

import { RouterModule,  Routes } from '@angular/router';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';



const appRoutes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NopagefoundComponent}
];


// para poder importar se necesita el modulo de routermodule

// crear nueva constante con la palabra export  por que vamos a importarlo en otro lugar
// con usehash se puede mandar el objeto de rutas
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash : true});
