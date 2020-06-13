import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import { APP_ROUTES } from './app.routes';


// temporal
import { FormsModule } from '@angular/forms';


// Servicios
// video 62 cambio la importacion por un services centralizado
// import { SettingsService } from './services/settings/settings.service';
import { ServiceModule } from './services/service.module';



// modulos
import { PagesModule } from './pages/pages.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
    /*como tip cuando tenga un modulo debo saber que se debe registrar en imports */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
