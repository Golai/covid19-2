import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReVisitaPageRoutingModule } from './re-visita-routing.module';

import { ReVisitaPage } from './re-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReVisitaPageRoutingModule
  ],
  declarations: [ReVisitaPage]
})
export class ReVisitaPageModule {}
