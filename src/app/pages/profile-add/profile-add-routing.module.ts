import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileAddPage } from './profile-add.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileAddPageRoutingModule {}
