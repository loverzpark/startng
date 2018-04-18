import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditOperationsComponent } from './audit-operations/audit-operations.component';
import { RouterModule } from '@angular/router';

import {SharedModuleModule} from '../../shared-module/shared-module.module'


import { ReactiveFormsModule } from '@angular/forms';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//import { FormulaireRechercheComponent } from '../../theme/components/formulaire-recherche/formulaire-recherche.component';

export const routes = [
  { path: '', redirectTo: 'auditOperations', pathMatch: 'full' },
  { path: 'auditOperations', component: AuditOperationsComponent, data: { breadcrumb: 'Audit des operations' } }
]

@NgModule({
  imports: [SharedModuleModule,
    CommonModule, RouterModule.forChild(routes),
    Ng2SmartTableModule, ReactiveFormsModule
  ],
  declarations: [AuditOperationsComponent],
  providers:[]
})
export class AuditModule { }
