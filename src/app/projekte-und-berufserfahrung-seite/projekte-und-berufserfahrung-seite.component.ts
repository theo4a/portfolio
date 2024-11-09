import { Component } from '@angular/core';
import { ProjektContainerComponent } from "../projekt-container/projekt-container.component";
import { NgFor } from '@angular/common';
import { Project } from '../models/project';

@Component({
    selector: 'app-projekte-und-berufserfahrung-seite',
    standalone: true,
    templateUrl: './projekte-und-berufserfahrung-seite.component.html',
    styleUrl: './projekte-und-berufserfahrung-seite.component.css',
    imports: [ProjektContainerComponent, NgFor]
})
export class ProjekteUndBerufserfahrungSeiteComponent {

    projects: Project[] = [
        new Project(
            "Contrast Render Website",
            "",
            "https://contrastrender.com",
            "images/contrastrender-website.jpg"
        ),
        new Project(
            "Imfit (Fitness App)",
            "",
            "https://imfit-aa5d1.web.app/",
            "images/imfit_logo.jpg"
        ),
        new Project(
            "Terrain Scapes (Blender Extension)",
            "",
            "https://contrastrender.com",
            "images/1.jpg"
        ),
        new Project(
            "Pro Atmo (Blender Extension)",
            "",
            "https://contrastrender.com",
            "images/1.jpg"
        ),
    ]

}
