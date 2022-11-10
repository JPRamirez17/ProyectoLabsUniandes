import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaboratoriosDetailComponent } from './laboratorios-detalle/laboratorios-detail.component';
import { LaboratoriosListarComponent } from './laboratorios-listar/laboratorios-listar.component';

const routes: Routes = [{
  path: 'laboratorios',
  children: [

    {
      path: 'list',
      component: LaboratoriosListarComponent
    },
    {
      path: ':id',
      component: LaboratoriosDetailComponent,
      runGuardsAndResolvers: 'always'
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoriosRoutingModule { }
