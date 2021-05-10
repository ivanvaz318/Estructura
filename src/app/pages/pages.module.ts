import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponents } from './pages.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [PagesComponent, LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    PagesComponents,
    ReactiveFormsModule,
    SharedModule,
    ToastModule,
    RippleModule,
    ButtonModule,
    BrowserAnimationsModule
  ]
})
export class PagesModule { }
