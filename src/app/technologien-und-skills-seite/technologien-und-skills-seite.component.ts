import { Component } from '@angular/core';
import { TechnologieContainerComponent } from "../technologie-container/technologie-container.component";
import { Technologie } from '../models/technologie';
import { NgFor } from '@angular/common';
import { SkillLevel } from '../models/skill_level';

@Component({
    selector: 'app-technologien-und-skills-seite',
    standalone: true,
    templateUrl: './technologien-und-skills-seite.component.html',
    styleUrl: './technologien-und-skills-seite.component.css',
    imports: [TechnologieContainerComponent, NgFor]
})
export class TechnologienUndSkillsSeiteComponent {

    programmierSprachen: Technologie[] = [
        new Technologie(
            "Java",
            "/images/technologien/java.png",
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "Pyhton",
            "/images/technologien/python.png",
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "Javascript",
            "/images/technologien/javascript.png",
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "CSS / HTML",
            "/images/technologien/html.png",
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "C",
            "/images/technologien/c.png",
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "Dart",
            "/images/technologien/dart.png",
            SkillLevel.SEHR_GUT
        ),
    ];

    frameworks: Technologie[] = [
        new Technologie(
            "Spring Boot",
            "/images/technologien/spring-boot.png",
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "Flutter",
            "/images/technologien/flutter.png",
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "Angualar",
            "/images/technologien/angular.png",
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "React",
            "/images/technologien/react.png",
            SkillLevel.SEHR_GUT
        ),
    ];

    programme: Technologie[] = [
        new Technologie(
            "MS Office",
            "/images/technologien/ms-office.png",
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "Adobe CC",
            "/images/technologien/adobe-cc.png",
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "Blender",
            "/images/technologien/blender.png",
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "Docker",
            "/images/technologien/docker.png",
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "Kubernetes",
            "/images/technologien/kubernetes.png",
            SkillLevel.SEHR_GUT
        ),
    ];

}
