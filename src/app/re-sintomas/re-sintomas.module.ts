import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReSintomasPageRoutingModule } from './re-sintomas-routing.module';

import { ReSintomasPage } from './re-sintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReSintomasPageRoutingModule
  ],
  declarations: [ReSintomasPage]
})
export class ReSintomasPageModule {}
