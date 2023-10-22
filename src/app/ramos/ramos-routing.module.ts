import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamosPage } from './ramos.page';

const routes: Routes = [
  {
    path: '',
    component: RamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamosPageRoutingModule {}
