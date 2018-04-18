import { Injectable } from '@angular/core';

@Injectable()
export class userService{


     public id: number;
        public nom: string;
        public prenom: string;
        public pseudo: string;
        public email: string;
        public profils: string[];

        constructor() {

            this.id = null;
             this.nom=null;
            this.prenom=null;
            this.pseudo=null;
            this.email=null;
            this.profils=null;
    
         }
}