import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapportDePerformanceComponent } from './rapport-de-performance/rapport-de-performance.component';
import {RouterModule} from '@angular/router'

import {SharedModuleModule} from '../../shared-module/shared-module.module'
import { ReactiveFormsModule } from '@angular/forms';

import { Ng2SmartTableModule } from 'ng2-smart-table';
export const routes =[
  {path:'rapportPerformance', component:RapportDePerformanceComponent,data:{ breadcrumb: 'Rapport de performance' }}
]
@NgModule({
  imports: [Ng2SmartTableModule,SharedModuleModule,ReactiveFormsModule,
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [RapportDePerformanceComponent]
})
export class RapportsModule { }
