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
            "images/projects/contrastrender-website.jpg",
            [
                "Angular",
                "Firebase-Hosting",
                "Notion",
            ],
        ),
        new Project(
            "Imfit (Fitness App)",
            "",
            "https://imfit---homepage.web.app/",
            "images/projects/imfit-homepage.jpg",
            [
                "Angular",
                "Javascript",
                "Firebase-Hosting",
                "Firebase-Storage",
                "Firebase-Firestore",
                "Flutter",
                "Spoonacular-Api",
                "O-Auth2",
            ],
        ),
        new Project(
            "Terrain Scapes (Blender Extension)",
            "",
            "https://blendermarket.com/products/terrain-scapes",
            "images/projects/terrain_scapes.jpg",
            [
                "Blender",
                "Blender Python-Api",
                "Blender Geometry-Nodes",
                "Blender Shader-Editor",
            ],
        ),
        new Project(
            "Pro Atmo (Blender Extension)",
            "",
            "https://blendermarket.com/products/pro-atmo",
            "images/projects/pro_atmo.jpg",
            [
            "Blender",
            "Blender Python-Api",
            "Blender Geometry-Nodes",
            "Blender Shader-Editor",
            ],
        ),
    ]

}
