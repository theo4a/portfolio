import { Component, Output, Input, EventEmitter } from '@angular/core';
import { TechnologieFilter } from '../models/technologieFilter';
import { FormsModule } from '@angular/forms';
import { Kategorie } from '../models/kategorie';
import { SkillLevel } from '../models/skill_level';

@Component({
  selector: 'app-filter-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-popup.component.html',
  styleUrl: './filter-popup.component.css'
})
export class FilterPopupComponent {

  isPopupVisible = false;

  togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
  }

  @Output() technologiefilterEmitter = new EventEmitter<TechnologieFilter>();
  technologieFilter: TechnologieFilter = new TechnologieFilter();

  programmierSprachen : boolean;
  frameworks : boolean;
  programme : boolean;
  sehrGut : boolean;
  sicher : boolean;
  grundKenntnisse : boolean;

  constructor() {
    this.programmierSprachen = this.technologieFilter.kategorien.get(Kategorie.PROGRAMMIER_SPRACHE)!;
    this.frameworks = this.technologieFilter.kategorien.get(Kategorie.FRAMEWORK)!;
    this.programme = this.technologieFilter.kategorien.get(Kategorie.PROGRAMM)!;
    this.sehrGut = this.technologieFilter.skillLevels.get(SkillLevel.SEHR_GUT)!;
    this.sicher = this.technologieFilter.skillLevels.get(SkillLevel.SICHER)!;
    this.grundKenntnisse = this.technologieFilter.skillLevels.get(SkillLevel.GRUNDKENNTNISSE)!;
  }

  updateTechnologieFilter() {
    this.technologiefilterEmitter.emit(this.technologieFilter);
  }

}
