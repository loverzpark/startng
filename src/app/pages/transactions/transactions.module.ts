import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import {RouterModule} from '@angular/router'


export const routes = [
  {path:'transactions', component : TransactionsComponent, data: { breadcrumb: 'Transactions' }},
  {path:'', redirectTo : 'transactions', pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [TransactionsComponent]
})
export class TransactionsModule { }
