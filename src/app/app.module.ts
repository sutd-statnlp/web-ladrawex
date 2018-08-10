import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent, FooterComponent, NavbarComponent } from './layouts';
import { HomeModule } from './pages';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* Pages Modules */
    HomeModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
