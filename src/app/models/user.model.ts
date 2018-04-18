export class userModel {
    constructor(public id: number,
        public nom: string,
        public prenom: string,
        public pseudo: string,
        public email: string,
        public roles: string[]){}
}