import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditOperationsComponent } from './audit-operations/audit-operations.component';
import {RouterModule} from '@angular/router'


export const routes=[
  {path:'',redirectTo:'auditOperations', pathMatch:'full'},
  {path:'auditOperations', component:AuditOperationsComponent,data:{ breadcrumb: 'Audit des operations' } }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [AuditOperationsComponent]
})
export class AuditModule { }
