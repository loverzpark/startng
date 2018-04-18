import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsulterFacturesComponent } from './consulter-factures/consulter-factures.component';
import {RouterModule} from '@angular/router';

export const routes = [
  {path:'', redirectTo:'consulterFactures',pathMatch:'full'},
  {path:'consulterFactures', component:ConsulterFacturesComponent,data:{ breadcrumb: 'Consulter Factures' }},
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConsulterFacturesComponent]
})
export class GestionFacturesModule { }
