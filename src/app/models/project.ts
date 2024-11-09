export class Project {

    title: string;
    github_url: string;
    project_url: string;
    image_url: string;

    constructor(title: string, github_url: string, project_url: string, image_url: string) {
        this.title = title;
        this.github_url = github_url;
        this.project_url = project_url;
        this.image_url = image_url;
    }

}