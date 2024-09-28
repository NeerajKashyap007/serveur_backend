import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeDesDevoirsComponent } from './liste-des-devoirs/liste-des-devoirs.component';
import { AjoutDevoirComponent } from './ajout-devoir/ajout-devoir.component';
import { ModificationDevoirComponent } from './modification-devoir/modification-devoir.component';
import { SuppressionDevoirComponent } from './suppression-devoir/suppression-devoir.component';
import { GenerationDonneesTestComponent } from './generation-donnees-test/generation-donnees-test.component';


export const routes: Routes = [
    {
        path:"home", component:HomeComponent
    },
    {
        path:"liste-des-devoirs", component:ListeDesDevoirsComponent
    },
    {
        path:"ajout-devoir", component:AjoutDevoirComponent
    },
    {
        path:"modification-devoir", component:ModificationDevoirComponent
    },
    {
        path:"suppression-devoir", component:SuppressionDevoirComponent
    },
    {
        path:"generation-donnees-test", component:GenerationDonneesTestComponent
    }
];

