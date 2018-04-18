import { Menu } from './menu.model';


export const verticalMenuItems =[
 new Menu (1,'Tableau de bord', '/pages/dashboard',null,'tachometer',null,false,0),
 new Menu (2,'Audit',null,null,'bar-chart',null,true,0),
 new Menu (3,'Gestion des factures',null,null,'file-word-o',null,true,0),
 new Menu (4,'Gestion des frais',null,null,'money',null,true,0),
new Menu (5,'Rapports',null,null,'align-left',null,true,0),
  new Menu (6,'Gestion des utilisateurs',null,null,'user',null,true,0),
 new Menu (7,'Parametrage',null,null,'cog',null,true,0),
new Menu (8,'Transactions',null,null,'id-card',null,true,0),

new Menu (9,'Audit Operations','/pages/audit/auditOperations',null,'angle-right',null,false,2),
 new Menu (10,'Consulter factures','/pages/gestionFactures/consulterFactures',null,'angle-right',null,false,3),
 new Menu (11,'Période tarifaire','/pages/gestionFrais/periodeTarifaire',null,'angle-right',null,false,4),
 new Menu (12,'Frais','/pages/gestionFrais/frais',null,'angle-right',null,false,4),
  new Menu (13,'Rapport de performance','/pages/rapports/rapportPerformance',null,'angle-right',null,false,5),
new Menu (14,'Profils','/pages/gestionUtilisateurs/profils',null,'angle-right',null,false,6),
 new Menu (15,'Utilisateurs','/pages/gestionUtilisateurs/utilisateurs',null,'angle-right',null,false,6),
 new Menu (16,'Mot de passe','/pages/gestionUtilisateurs/MotDePasse',null,'angle-right',null,false,6),
 new Menu (17,'Droit d\'acces','/pages/gestionUtilisateurs/DroitAcces',null,'angle-right',null,false,6),
new Menu (18,'Transactions','/pages/transactions/transactions',null,'angle-right',null,false,8)

];



 export const horizontalMenuItems =[
    new Menu (1,'Tableau de bord', '/pages/dashboard',null,'tachometer',null,false,0),

    new Menu (2,'Audit',null,null,'bar-chart',null,true,0),
    new Menu (3,'Gestion des factures',null,null,'file-word-o',null,true,0),
    new Menu (4,'Gestion des frais',null,null,'money',null,true,0),
    new Menu (5,'Rapports',null,null,'align-left',null,true,0),
    new Menu (6,'Gestion des utilisateurs',null,null,'user',null,true,0),
    new Menu (7,'Parametrage',null,null,'cog',null,true,0),
    new Menu (8,'Transactions',null,null,'id-card',null,true,0),
   
    new Menu (9,'Audit Operations','/pages/audit/auditOperations',null,'angle-right',null,false,2),
    new Menu (10,'Consulter factures','/pages/gestionFactures/consulterFactures',null,'angle-right',null,false,3),
    new Menu (11,'Période tarifaire','/pages/gestionFrais/periodeTarifaire',null,'angle-right',null,false,4),
    new Menu (12,'Frais','/pages/gestionFrais/frais',null,'angle-right',null,false,4),
    new Menu (13,'Rapport de performance','/pages/rapports/rapportPerformance',null,'angle-right',null,false,5),
    new Menu (14,'Profils','/pages/gestionUtilisateurs/profils',null,'angle-right',null,false,6),
    new Menu (15,'Utilisateurs','/pages/gestionUtilisateurs/utilisateurs',null,'angle-right',null,false,6),
    new Menu (16,'Mot de passe','/pages/gestionUtilisateurs/MotDePasse',null,'angle-right',null,false,6),
    new Menu (17,'Droit d\'acces','/pages/gestionUtilisateurs/DroitAcces',null,'angle-right',null,false,6),
    new Menu (18,'Transactions','/pages/transactions/transactions',null,'angle-right',null,false,8)
];
