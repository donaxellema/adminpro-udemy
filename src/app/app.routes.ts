/* se usa asi pero debo importar las */
/* import { Routes } from '@angular/router'; */

import { RouterModule,  Routes } from '@angular/router';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProgessComponent } from './pages/progess/progess.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgessComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NopagefoundComponent}
];


// para poder importar se necesita el modulo de routermodule

// crear nueva constante con la palabra export  por que vamos a importarlo en otro lugar
// con usehash se puede mandar el objeto de rutas
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash : true});
