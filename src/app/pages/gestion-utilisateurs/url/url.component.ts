import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UrlComponent implements OnInit {


  constructor(public router:Router) { 
    this.getData((data) => {
     this.data = data;
   });
 }

 ngOnInit() {
 }

 public data = [];

 public settings = {
   selectMode: 'single',  //single|multi
   hideHeader: false,
   hideSubHeader: false,
   actions: {
     columnTitle: 'Actions',
     add: false,
     edit: false,
     delete: false,
     custom: [],
     position: 'right' // left|right
   },


   add: {
     addButtonContent: '<h4 class="mb-1"><i class="fa fa-plus ml-3 text-success"></i></h4>',
     createButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
     cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
   },
   edit: {
     editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
     saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
     cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
   },
   delete: {
     deleteButtonContent: '<i class="fa fa-trash-o text-danger"></i>',
     confirmDelete: true
   },


   noDataMessage: 'Aucunes données',


   columns: {
     id: {
       title: 'ID',
       editable: false,
       width: '5%',
       type: 'html',
       valuePrepareFunction: (value) => { return '<div class="text-center">' + value + '</div>'; }
     },
     operation: {
       title: 'Operation',
       type: 'string',
       width: '20%'
     },
     ip: {
       title: 'Ip',
       type: 'string',
       width: '20%'
     },
     date: {
       title: 'Date',
       type: 'string',
       width: '20%'
     },
     utilisateur: {
       title: 'Utilisateur',
       type: 'string',
       width: '20%'
     },
     role: {
       title: 'Role',
       type: 'string',
       width: '20%'
     }
   },

   pager: {
     display: true,
     perPage: 5
   }
 };



public getData(data) {
 const req = new XMLHttpRequest();
 req.open('GET', 'assets/data/audit.json');
 req.onload = () => {
   data(JSON.parse(req.response));
 };
 req.send();

 }


 
 public onDeleteConfirm(event): void {
   if (window.confirm('Are you sure you want to delete?')) {
     event.confirm.resolve();
   } else {
     event.confirm.reject();
   }
 }

 public onRowSelect(event) {
   // console.log(event);
 }

 public onUserRowSelect(event) {
   //console.log(event);   //this select return only one page rows
 }

 public onRowHover(event) {
   //console.log(event);
 }

}