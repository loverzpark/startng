import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import {RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {userService} from '../../services/user.service';
import { ProfilsComponent } from './profils/profils.component';
import { MotDePasseComponent } from './mot-de-passe/mot-de-passe.component';
import { DroitAccesComponent } from './droit-acces/droit-acces.component';
import { UrlComponent } from './url/url.component';
import { AjouterProfilComponent } from './ajouter-profil/ajouter-profil.component'


export const routes =[
  { path: '', redirectTo: 'utilisateurs', pathMatch: 'full'},
  { path: 'utilisateurs', component: UtilisateursComponent, data: { breadcrumb: 'Utilisateurs' } },
  { path: 'profils', component: ProfilsComponent, data: { breadcrumb: 'Profils' } },
  { path: 'motDePasse', component: MotDePasseComponent, data: { breadcrumb: 'Mot de passe' } },
  { path: 'droitAcces', component: DroitAccesComponent, data: { breadcrumb: 'Droit Acces' } },
  { path: 'url', component: UrlComponent, data: { breadcrumb: 'Droit Acces' } },
  { path: 'ajouterprofil', component: AjouterProfilComponent, data: { breadcrumb: 'Droit Acces' } },
]


@NgModule({
  imports: [FormsModule,
    CommonModule,RouterModule.forChild(routes),Ng2SmartTableModule,ReactiveFormsModule
  ],
  declarations: [UtilisateursComponent, ProfilsComponent, MotDePasseComponent, DroitAccesComponent, UrlComponent, AjouterProfilComponent],
  providers:[userService]
})



export class GestionUtilisateursModule { }
