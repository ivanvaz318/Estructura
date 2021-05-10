import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutesModule } from 'src/config/routes.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';


import {ToastModule} from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent ],
  imports: [
    BrowserModule,
    RoutesModule,
    PagesModule,
    ToastModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
