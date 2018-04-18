import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodeTarifaireComponent } from './periode-tarifaire/periode-tarifaire.component';
import { FraisComponent } from './frais/frais.component';
import { RouterModule } from '@angular/router';

export const routes = [
  {path:'periodeTarifaire',component:PeriodeTarifaireComponent,data: { breadcrumb: 'Periode Tarifaire' }},
  {path:'frais',component:FraisComponent,data: { breadcrumb: 'Frais' }}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeriodeTarifaireComponent, FraisComponent]
})
export class GestionFraisModule { }
