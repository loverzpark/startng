import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodeTarifaireComponent } from './periode-tarifaire/periode-tarifaire.component';
import { FraisComponent } from './frais/frais.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AjouterPeriodeTarifaireComponent } from './ajouter-periode-tarifaire/ajouter-periode-tarifaire.component';
import { AjouterFraisComponent } from './ajouter-frais/ajouter-frais.component';

export const routes = [
  {path:'periodeTarifaire',component:PeriodeTarifaireComponent,data: { breadcrumb: 'Periode Tarifaire' }},
  {path:'frais',component:FraisComponent,data: { breadcrumb: 'Frais' }},
  { path: 'ajouterperiodeTarifaire', component: AjouterPeriodeTarifaireComponent, data: { breadcrumb: 'Ajouter Periode Tarifaire' } },
  { path: 'ajouterFrais', component: AjouterFraisComponent, data: { breadcrumb: 'Ajouter Periode Tarifaire' } },
]

@NgModule({
  imports: [
    CommonModule,Ng2SmartTableModule,
    RouterModule.forChild(routes),ReactiveFormsModule,FormsModule,
  ],
  declarations: [PeriodeTarifaireComponent, FraisComponent, AjouterPeriodeTarifaireComponent, AjouterFraisComponent]
})
export class GestionFraisModule { }
