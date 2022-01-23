import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



import { IonicModule } from '@ionic/angular';

import { SourcePageRoutingModule } from './source-routing.module';

import { SourcePage } from './source.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SourcePageRoutingModule
  ],
  declarations: [SourcePage]
})
export class SourcePageModule {}
