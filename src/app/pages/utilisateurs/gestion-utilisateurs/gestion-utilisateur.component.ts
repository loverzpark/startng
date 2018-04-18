import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {userService} from '../../../services/user.service';
import { FormGroup, FormControl,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GestionUtilisateurComponent implements OnInit {

  constructor(public userService: userService) { }
  
  myform: FormGroup; 
  nom: FormControl;
  prenom:FormControl;
  pseudo:FormControl;
  email:FormControl;

  ngOnInit() {
    
    this.createFormControls();
    this.createForm();
  }


  createFormControls() { 
    this.nom = new FormControl('',[
      Validators.required
    ]),

    this.prenom = new FormControl('',[
      Validators.required
    ]),

    this.pseudo = new FormControl('',[
      Validators.required
    ]),

    this.email = new FormControl('',[
      Validators.required
    ])

  }


  createForm() { 
    this.myform = new FormGroup({
      nom:this.nom,
      prenom: this.prenom,
      email: this.email,
      pseudo: this.pseudo,
     
    });
  }

  onSubmit(){
    console.log('operation');
  }
}
