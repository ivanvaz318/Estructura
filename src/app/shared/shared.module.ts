import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { AlertsComponent } from './components/alerts/alerts.component';

import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from './components/card/card.component';
import { CardModule, } from 'primeng/card';
@NgModule({
  declarations: [NabvarComponent, AlertsComponent, CardComponent],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule,
    CardModule
  ],
  exports:[
    NabvarComponent,
    AlertsComponent,
    CardComponent
  ]
})
export class SharedModule { }
