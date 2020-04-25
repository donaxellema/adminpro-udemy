import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';





@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgessComponent,
        Graficas1Component
    ],
    exports: [
        DashboardComponent,
        ProgessComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})
export class PagesModule {}
