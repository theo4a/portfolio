export class Project {

    title: string;
    github_url: string;
    project_url: string;
    image_url: string;
    benutze_technologien: string[];

    constructor(
        title: string,
        github_url: string,
        project_url: string,
        image_url: string,
        benutze_technologien: string[],
    ) {
        this.title = title;
        this.github_url = github_url;
        this.project_url = project_url;
        this.image_url = image_url;
        this.benutze_technologien = benutze_technologien;
    }

}