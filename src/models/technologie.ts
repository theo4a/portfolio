import { Kategorie } from "./kategorie";
import { SkillLevel } from "./skill_level";

export class Technologie {

    name: string;
    kategorie: Kategorie;
    skill_level: SkillLevel;

    constructor(name: string, kategorie: Kategorie, skill_level: SkillLevel) {
        this.name = name;
        this.kategorie = kategorie;
        this.skill_level = skill_level;
    }

    static getTechnologien(): Technologie[] {
      return [
        new Technologie(
            "Java",
            Kategorie.PROGRAMMIER_SPRACHE,
            SkillLevel.SEHR_GUT
        ),
        new Technologie(
            "Python",
            Kategorie.PROGRAMMIER_SPRACHE,
            SkillLevel.SICHER
        ),
        new Technologie(
            "C",
            Kategorie.PROGRAMMIER_SPRACHE,
            SkillLevel.GRUNDKENNTNISSE
        ),
        new Technologie(
            "Spring Boot",
            Kategorie.FRAMEWORK,
            SkillLevel.SICHER
        ),
        new Technologie(
            "Angular",
            Kategorie.FRAMEWORK,
            SkillLevel.SICHER
        ),
        new Technologie(
            "Flutter",
            Kategorie.FRAMEWORK,
            SkillLevel.SICHER
        ),
        new Technologie(
            "Dart",
            Kategorie.PROGRAMMIER_SPRACHE,
            SkillLevel.SICHER
        ),
        new Technologie(
            "Firebase",
            Kategorie.PROGRAMM,
            SkillLevel.GRUNDKENNTNISSE
        ),
        new Technologie(
            "Docker",
            Kategorie.PROGRAMM,
            SkillLevel.GRUNDKENNTNISSE
        ),
        new Technologie(
            "Kubernetes",
            Kategorie.PROGRAMM,
            SkillLevel.GRUNDKENNTNISSE
        ),
    ];
    }

}