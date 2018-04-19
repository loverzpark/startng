import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ajouter-periode-tarifaire',
  templateUrl: './ajouter-periode-tarifaire.component.html',
  styleUrls: ['./ajouter-periode-tarifaire.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class AjouterPeriodeTarifaireComponent implements OnInit {

  constructor() { }
  
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


   //Datepicker in a popup
   public modelPopup1: NgbDateStruct = {year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate()-3};
   //Datepicker in a popup
   public modelPopup2: NgbDateStruct = {year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate()-3};
 
}
