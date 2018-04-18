import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
@Component({
  selector: 'app-gestion-profils',
  templateUrl: './gestion-profils.component.html',
  styleUrls: ['./gestion-profils.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GestionProfilsComponent implements OnInit {


  myform: FormGroup;
  nom: FormControl;
  constructor() { }

  ngOnInit() {
    this. createFormControl();
    this.createFormGroup();
  }

  createFormControl() {
    this.nom = new FormControl('', Validators.required);
  }

  createFormGroup() {
    this.myform = new FormGroup({
      nom: this.nom
    });
  }

}
