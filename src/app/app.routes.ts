import { Routes } from '@angular/router';
import { LebenslaufSeiteComponent } from './lebenslauf-seite/lebenslauf-seite.component';
import { ProjekteUndBerufserfahrungSeiteComponent } from './projekte-und-berufserfahrung-seite/projekte-und-berufserfahrung-seite.component';

export const routes: Routes = [
    {path: '', redirectTo: 'lebenslauf', pathMatch: 'full'},
    {path: 'lebenslauf', component: LebenslaufSeiteComponent},
    {path: 'projekte-und-berufserfahrung', component: ProjekteUndBerufserfahrungSeiteComponent},
];
