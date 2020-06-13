import { RouterModule, Routes} from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgessComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: 'account-settings', component: AccountSettingsComponent},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    }
];

/** Exportar el modulo de rutas para que sea incorporada en otro lugar que sea una constante */
/** NOTA ESTOY IGUALANDO PAGES_ROUTES A RouterModule de arriba del inicio y uso forchild para rutas hijas  */
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);


/** PARA MANEJAR UN ORDEN HAY QUE LLAMAR EJEMPLO LOS PAGE ROUTES DENTRO DE PAGES MODULE */
