type ProjectType={
    prName:string;
    teamLead:TeamLeadType;
}

type ManagerType = {
    name:string;
    projects:ProjectType[];
}

type TeamLeadType ={
    name:string;
    developers:DevelopersType[];
}

type DevelopersType = {
    name:string;
}



class Employee{
    public name:string;
    constructor(name:string){
        this.name = name;
    }

}
class Director extends Employee{
    public managers!:ManagerType[];

    constructor(name:string){
        super(name);
        this.managers = [];
    }

    public addManager(manager:ManagerType){
        this.managers.push(manager);

    }

    public getAllManagers(){
        return this.managers;
    }

    public getAllProjects(){
        let projectArr = [];
        if(this.managers.length !== 0){
            for(let i=0;i<this.managers.length;i++){
                projectArr.push(this.managers[i].projects);
            }
        }
        return projectArr;
    }
}

class Manager extends Employee{
    public name!:string;
    public projects: ProjectType[];
    constructor(name:string){
        super(name);
        this.projects = [] ;

    }

    public addProject(project:ProjectType){
        this.projects.push(project);
    }
    public getProjects(){
        return this.projects;
    }

}

class TeamLead extends Employee{
    public developers:DevelopersType[];
    constructor(name:string){
        super(name);
        this.developers = [];
    }

    public addDevelopers(developer:DevelopersType){
        this.developers.push(developer);
    }

    public getDevelopers(){
        return this.developers;
    }

}

class Developer extends Employee{
    public name!:string;
    constructor(name:string){
        super(name);

    }

}

class Project{
    prName!:string;
    public teamLead!: TeamLeadType;
    constructor(prName:string){
        this.prName = prName;
    }

    public addTeamLead(teamLead:TeamLeadType){
        this.teamLead = teamLead;
    }

    public getTeamLead(){
        return this.teamLead;
    }

}


const director = new Director('Nare');
const managerAnn = new Manager('Ann' );
const managerLisa = new Manager('Lisa');
const javascriptProject = new Project('Js Project');
const teamLead = new TeamLead('TeamLead1');
const developerFirst = new Developer('David');

director.addManager(managerAnn);
director.addManager(managerLisa);
let added_manager = managerAnn.addProject(javascriptProject);


const projects = managerAnn.getProjects();
javascriptProject.addTeamLead(teamLead);
teamLead.addDevelopers(developerFirst);
const developers = teamLead.getDevelopers();
let projectsArray = director.getAllProjects();
//console.log(projectsArray);
//console.log(projects);
//console.log(developers);
//console.log(managerAnn);
