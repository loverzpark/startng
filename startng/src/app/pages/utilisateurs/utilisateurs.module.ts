import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { GestionUtilisateurComponent } from './gestion-utilisateurs/gestion-utilisateur.component';
import {RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule }   from '@angular/forms';

import {userService} from '../../services/user.service'


export const routes =[
  { path: '', redirectTo: 'listeUtilisateurs', pathMatch: 'full'},
  { path: 'listeUtilisateurs', component: ListeUtilisateursComponent, data: { breadcrumb: 'Liste Utilisateurs' } },
  {path:'gestionUtilisateur', component:GestionUtilisateurComponent,data:{breadcrumb:'Gestion utilisateur'}}
]


@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),Ng2SmartTableModule,ReactiveFormsModule
  ],
  declarations: [ListeUtilisateursComponent, GestionUtilisateurComponent],
  providers:[userService]
})



export class UtilisateursModule { }
