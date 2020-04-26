import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReSintomasPage } from './re-sintomas.page';

const routes: Routes = [
  {
    path: '',
    component: ReSintomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReSintomasPageRoutingModule {}
