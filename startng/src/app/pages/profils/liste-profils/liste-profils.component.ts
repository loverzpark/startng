import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-liste-profils',
  templateUrl: './liste-profils.component.html',
  styleUrls: ['./liste-profils.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListeProfilsComponent implements OnInit {


  constructor(public router:Router) { 
    this.data = [
      {id:1,nom:'secretaire'},
      {id:2,nom:'administrateur'},
      {id:3,nom:'directeur'}
    ];
  }

  ngOnInit() {
  }

  public data = [];

  public settings = {
    selectMode: 'single',  //single|multi
    hideHeader: false,
    hideSubHeader: true,
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: 'edit',
          title: '<i class="fa fa-pencil mr-3 text-primary" title="modifier"></i>'
        },

        {
          name: 'delete',
          title: '<i class="fa fa-trash mr-3 text-danger" title="supprimer"></i>'
        },



      ],
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
        width: '60px',
        type: 'html',
        valuePrepareFunction: (value) => { return '<div class="text-center">' + value + '</div>'; }
      },
      nom: {
        title: 'Nom',
        type: 'string',
        width: '80%'
      }
    },



    pager: {
      display: true,
      perPage: 20
    }
  };



  public getData(data) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/users.json');
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

  onCustom(event) {

    const eventAction = event.action;


    switch (eventAction) {

      case 'edit': {
        this.router.navigate(['pages/profils/gestionProfils']);
        break;
      }

      case 'delete': {
        alert('delete');
        break;
      }


    }

  }

// ouvrir la vue gestion profil pour faire un nouvel enregistrement
  ajouter() {
    this.router.navigate(['pages/profils/gestionProfils']);
  }
}
