import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {FormulaireRechercheComponent} from '../theme/components/formulaire-recherche/formulaire-recherche.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,NgbModule.forRoot(),FormsModule
  ],
  declarations: [FormulaireRechercheComponent],
  exports:[FormulaireRechercheComponent]
})
export class SharedModuleModule { }
