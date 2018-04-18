import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodeTarifaireComponent } from './periode-tarifaire/periode-tarifaire.component';
import { FraisComponent } from './frais/frais.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PeriodeTarifaireComponent, FraisComponent]
})
export class GestionFraisModule { }
