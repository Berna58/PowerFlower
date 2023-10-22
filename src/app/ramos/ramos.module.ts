import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamosPageRoutingModule } from './ramos-routing.module';

import { RamosPage } from './ramos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamosPageRoutingModule
  ],
  declarations: [RamosPage]
})
export class RamosPageModule {}
