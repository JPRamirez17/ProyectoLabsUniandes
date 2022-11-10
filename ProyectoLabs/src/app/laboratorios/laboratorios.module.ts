import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LaboratoriosListarComponent } from './laboratorios-listar/laboratorios-listar.component';
import { LaboratoriosDetailComponent } from './laboratorios-detalle/laboratorios-detail.component';
import { LaboratoriosRoutingModule } from './laboratorios-routing.module';




@NgModule({
  declarations: [
    LaboratoriosListarComponent,
    LaboratoriosDetailComponent,
  ],
  imports: [
    CommonModule,
    LaboratoriosRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    LaboratoriosListarComponent
  ]
})
export class LaboratoriosModule { }
