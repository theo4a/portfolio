import { Kategorie } from "./kategorie";
import { SkillLevel } from "./skill_level";

export class Technologie {

    name: string;
    image_url: string;
    skill_level: SkillLevel;

    constructor(name: string, imgae_url: string, skill_level: SkillLevel) {
        this.name = name;
        this.image_url = imgae_url;
        this.skill_level = skill_level;
    }

}