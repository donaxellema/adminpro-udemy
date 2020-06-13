import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';


// ng2 charts
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// importacion temportal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDoughnutComponent } from '../components/grafica-doughnut/grafica-doughnut.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';





@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgessComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficaDoughnutComponent,
        AccountSettingsComponent
    ],
    exports: [
        DashboardComponent,
        ProgessComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule {}
