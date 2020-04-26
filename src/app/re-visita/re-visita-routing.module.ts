import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReVisitaPage } from './re-visita.page';

const routes: Routes = [
  {
    path: '',
    component: ReVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReVisitaPageRoutingModule {}
