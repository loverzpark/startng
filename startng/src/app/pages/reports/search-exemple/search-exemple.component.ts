import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-exemple',
  templateUrl: './search-exemple.component.html',
  styleUrls: ['./search-exemple.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchExempleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  //Datepicker in a popup
  public modelPopup1: NgbDateStruct = {year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate()-3};
  //Datepicker in a popup
  public modelPopup2: NgbDateStruct = {year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate()-3};
}
