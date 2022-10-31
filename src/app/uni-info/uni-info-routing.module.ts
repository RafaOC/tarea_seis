import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniInfoPage } from './uni-info.page';

const routes: Routes = [
  {
    path: '',
    component: UniInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniInfoPageRoutingModule {}
