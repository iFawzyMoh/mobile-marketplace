import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileAddPageRoutingModule } from './profile-add-routing.module';

import { ProfileAddPage } from './profile-add.page';

import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProfileAddPageRoutingModule
  ],
  declarations: [ProfileAddPage],
  providers:[Camera]
})
export class ProfileAddPageModule {}
