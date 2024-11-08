import { Routes } from '@angular/router';
import { LebenslaufSeiteComponent } from './lebenslauf-seite/lebenslauf-seite.component';
import { ProjekteUndBerufserfahrungSeiteComponent } from './projekte-und-berufserfahrung-seite/projekte-und-berufserfahrung-seite.component';
import { TechnologienUndSkillsSeiteComponent } from './technologien-und-skills-seite/technologien-und-skills-seite.component';

export const routes: Routes = [
    {path: '', redirectTo: 'lebenslauf', pathMatch: 'full'},
    {path: 'lebenslauf', component: LebenslaufSeiteComponent},
    {path: 'projekte-und-berufserfahrung', component: ProjekteUndBerufserfahrungSeiteComponent},
    {path: 'technologien-und-skills', component: TechnologienUndSkillsSeiteComponent},
];
