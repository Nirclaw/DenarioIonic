import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskeditPageRoutingModule } from './taskedit-routing.module';

import { TaskeditPage } from './taskedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskeditPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [TaskeditPage]
})
export class TaskeditPageModule {}
