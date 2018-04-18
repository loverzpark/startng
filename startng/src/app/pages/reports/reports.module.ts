import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ReportExempleComponent } from './report-exemple/report-exemple.component';
import { SearchExempleComponent } from './search-exemple/search-exemple.component'
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes = [
 { path: '', redirectTo: 'reportExemple', pathMatch: 'full'},
  {path:'reportExemple', component:ReportExempleComponent,data: { breadcrumb: 'Report exemple 1' }}
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),Ng2SmartTableModule,NgbModule,NgbModule.forRoot(),FormsModule
  ],
  declarations: [ReportExempleComponent, SearchExempleComponent]
})
export class ReportsModule { }
