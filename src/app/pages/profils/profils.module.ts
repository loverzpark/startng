import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeProfilsComponent } from './liste-profils/liste-profils.component';
import { GestionProfilsComponent } from './gestion-profils/gestion-profils.component';
import {RouterModule} from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule }   from '@angular/forms';

export const routes=[
  { path: '', redirectTo: 'listeProfils', pathMatch: 'full'},
  {path:'listeProfils', component:ListeProfilsComponent, data: { breadcrumb: 'Liste Profils' }},
  {path:'gestionProfils', component:GestionProfilsComponent, data:{breadcrumb:'Gestion Profil'}}
]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),Ng2SmartTableModule,ReactiveFormsModule
  ],
  declarations: [ListeProfilsComponent, GestionProfilsComponent]
})


export class ProfilsModule { 
}
