import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { APP_ROUTES } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    SharedModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
