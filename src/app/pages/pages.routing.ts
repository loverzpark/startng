import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';

export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            
            { path:'', redirectTo:'dashboard', pathMatch:'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' }  },
            { path: 'audit', loadChildren: 'app/pages/audit/audit.module#AuditModule', data: { breadcrumb: 'Audit' }},  
            { path: 'gestionFactures', loadChildren: 'app/pages/gestion-factures/gestion-factures.module#GestionFacturesModule', data: { breadcrumb: 'Gestion des Factures'} },  
            { path: 'gestionFrais', loadChildren: 'app/pages/gestion-frais/gestion-frais.module#GestionFraisModule', data: { breadcrumb: 'Gestion des Frais' }  },  
           { path: 'rapports', loadChildren: 'app/pages/rapports/rapports.module#RapportsModule', data: { breadcrumb: 'Rapport' }  },  
            { path: 'gestionUtilisateurs', loadChildren: 'app/pages/gestion-utilisateurs/gestion-utilisateurs.module#GestionUtilisateursModule', data: { breadcrumb: 'Gestion des utilisateurs' }  },  
            { path: 'transactions', loadChildren: 'app/pages/transactions/transactions.module#TransactionsModule', data: { breadcrumb: 'Transactions' }  },  
       
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);