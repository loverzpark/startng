import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import {RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule }   from '@angular/forms';

import {userService} from '../../services/user.service'


export const routes =[
  { path: '', redirectTo: 'listeUtilisateurs', pathMatch: 'full'},
  { path: 'listeUtilisateurs', component: UtilisateursComponent, data: { breadcrumb: 'Liste Utilisateurs' } },
]


@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),Ng2SmartTableModule,ReactiveFormsModule
  ],
  declarations: [UtilisateursComponent],
  providers:[userService]
})



export class GestionUtilisateursModule { }
