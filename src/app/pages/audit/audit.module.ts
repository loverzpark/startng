import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditOperationsComponent } from './audit-operations/audit-operations.component';
import {RouterModule} from '@angular/router';

import {FormulaireRechercheComponent} from '../../theme/components/formulaire-recherche/formulaire-recherche.component';

import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export const routes=[
  {path:'',redirectTo:'auditOperations', pathMatch:'full'},
  {path:'auditOperations', component:AuditOperationsComponent,data:{ breadcrumb: 'Audit des operations' } }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    Ng2SmartTableModule,ReactiveFormsModule,FormsModule,NgbModule.forRoot()
  ],
  declarations: [AuditOperationsComponent,FormulaireRechercheComponent]
})
export class AuditModule { }
