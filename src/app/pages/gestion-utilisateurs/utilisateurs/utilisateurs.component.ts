import { Component, Output, OnInit, ViewEncapsulation } from '@angular/core';
import { userService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UtilisateursComponent implements OnInit {


  constructor(public userService: userService, public router: Router) {
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
        width: '20%'
      },
      prenom: {
        title: 'Prenom',
        type: 'string',
        width: '20%'
      },
      pseudo: {
        title: 'pseudo',
        type: 'string', width: '20%'
      },
      email: {
        title: 'E-mail',
        type: 'string',
        width: '20%'
      },
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
        let pos = this.data.indexOf(event.data);


        if (pos > -1) {
          this.userService.id = this.data[pos].id;
          this.userService.nom = this.data[pos].nom;
          this.userService.prenom = this.data[pos].prenom;
          this.userService.pseudo = this.data[pos].pseudo;
          this.userService.email = this.data[pos].email;
          this.userService.profils = null

          this.router.navigate(['pages/utilisateurs/gestionUtilisateur']);
        }
      
        
        break;
      }

      case 'delete': {
        if (window.confirm('Voulez-vous vraiment supprimer l\'utilisateur ? ${e')) {
          event.confirm.resolve();
        } else {
          event.confirm.reject();
        }
        break;
      }


    }

  }


  ajouter() {

    this.userService.id = null;
    this.userService.nom = null;
    this.userService.prenom = null;
    this.userService.pseudo = null;
    this.userService.email = null;
    this.userService.profils = null;

    this.router.navigate(['pages/utilisateurs/gestionUtilisateur']);
  }

}
