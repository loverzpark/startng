import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapportDePerformanceComponent } from './rapport-de-performance/rapport-de-performance.component';
import {RouterModule} from '@angular/router'

export const routes =[
  {path:'rapportPerformance', component:RapportDePerformanceComponent,data:{ breadcrumb: 'Rapport de performance' }}
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [RapportDePerformanceComponent]
})
export class RapportsModule { }
