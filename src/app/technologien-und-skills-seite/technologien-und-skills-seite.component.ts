import { Component } from '@angular/core';
import { TechnologieContainerComponent } from "../technologie-container/technologie-container.component";
import { FilterPopupComponent } from "../filter-popup/filter-popup.component";
import { Technologie } from '../models/technologie';
import { NgFor } from '@angular/common';
import { TechnologieFilter } from '../models/technologieFilter';

@Component({
    selector: 'app-technologien-und-skills-seite',
    standalone: true,
    templateUrl: './technologien-und-skills-seite.component.html',
    styleUrl: './technologien-und-skills-seite.component.css',
    imports: [TechnologieContainerComponent, FilterPopupComponent, NgFor]
})
export class TechnologienUndSkillsSeiteComponent {

    technologieFilter: TechnologieFilter = new TechnologieFilter();

    technologien: Technologie[] = Technologie.getTechnologien();

    constructor() {
        this.applyFilter(this.technologieFilter);
    }

    applyFilter(technologieFilter : TechnologieFilter) {
        this.technologien = technologieFilter.filterTechnologien(Technologie.getTechnologien());
    }

}
