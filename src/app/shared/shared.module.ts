import { NgModule } from '@angular/core';
/* dentro del angular common esta las etiquetas de ng-for ng-if y pipes y otras cosas mas */
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
    /* me falta importar el router momdule que es similar a ui-sref para enrutar las direcciones de las pages*/
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ]
})

export class SharedModule {}
