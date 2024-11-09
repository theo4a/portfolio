import { Kategorie } from "./kategorie";
import { SkillLevel } from "./skill_level";
import { Technologie } from "./technologie";

export class TechnologieFilter {
    
    kategorien : Map<Kategorie, boolean>;
    skillLevels : Map<SkillLevel, boolean>;

    constructor() {
        this.kategorien = new Map<Kategorie, boolean>([
            [Kategorie.PROGRAMMIER_SPRACHE, true],
            [Kategorie.FRAMEWORK, true],
            [Kategorie.PROGRAMM, true]
        ]);
        this.skillLevels = new Map<SkillLevel, boolean>([
            [SkillLevel.SEHR_GUT, true],
            [SkillLevel.SICHER, true],
            [SkillLevel.GRUNDKENNTNISSE, true]
        ]);
    }

    filterTechnologien(technologien: Technologie[]): Technologie[] {
        return technologien.filter(element => (
            this.kategorien.get(element.kategorie)!
            && this.skillLevels.get(element.skill_level)
        ));
    }
}
