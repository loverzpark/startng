import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import {RouterModule} from '@angular/router';

import {SharedModuleModule} from '../../shared-module/shared-module.module'

import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


export const routes = [
  {path:'transactions', component : TransactionsComponent, data: { breadcrumb: 'Transactions' }},
  {path:'', redirectTo : 'transactions', pathMatch:'full'}
]
@NgModule({
  imports: [SharedModuleModule,
    CommonModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule,ReactiveFormsModule,FormsModule,NgbModule.forRoot()
  ],
  declarations: [TransactionsComponent]
})
export class TransactionsModule { }
