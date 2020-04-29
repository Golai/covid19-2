import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReVisitaPageRoutingModule } from './re-visita-routing.module';

import { ReVisitaPage } from './re-visita.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReVisitaPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [ReVisitaPage]
})
export class ReVisitaPageModule {}
