var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    return Employee;
}());
var Director = /** @class */ (function (_super) {
    __extends(Director, _super);
    function Director(name) {
        var _this = _super.call(this, name) || this;
        _this.managers = [];
        return _this;
    }
    Director.prototype.addManager = function (manager) {
        this.managers.push(manager);
    };
    Director.prototype.getAllManagers = function () {
        return this.managers;
    };
    Director.prototype.getAllProjects = function () {
        var projectArr = [];
        if (this.managers.length !== 0) {
            for (var i = 0; i < this.managers.length; i++) {
                projectArr.push(this.managers[i].projects);
            }
        }
        return projectArr;
    };
    return Director;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        var _this = _super.call(this, name) || this;
        _this.projects = [];
        return _this;
    }
    Manager.prototype.addProject = function (project) {
        this.projects.push(project);
    };
    Manager.prototype.getProjects = function () {
        return this.projects;
    };
    return Manager;
}(Employee));
var TeamLead = /** @class */ (function (_super) {
    __extends(TeamLead, _super);
    function TeamLead(name) {
        var _this = _super.call(this, name) || this;
        _this.developers = [];
        return _this;
    }
    TeamLead.prototype.addDevelopers = function (developer) {
        this.developers.push(developer);
    };
    TeamLead.prototype.getDevelopers = function () {
        return this.developers;
    };
    return TeamLead;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name) {
        return _super.call(this, name) || this;
    }
    return Developer;
}(Employee));
var Project = /** @class */ (function () {
    function Project(prName) {
        this.prName = prName;
    }
    Project.prototype.addTeamLead = function (teamLead) {
        this.teamLead = teamLead;
    };
    Project.prototype.getTeamLead = function () {
        return this.teamLead;
    };
    return Project;
}());
var director = new Director('Nare');
var managerAnn = new Manager('Ann');
var managerLisa = new Manager('Lisa');
var javascriptProject = new Project('Js Project');
var teamLead = new TeamLead('TeamLead1');
var developerFirst = new Developer('David');
director.addManager(managerAnn);
director.addManager(managerLisa);
var added_manager = managerAnn.addProject(javascriptProject);
var projects = managerAnn.getProjects();
javascriptProject.addTeamLead(teamLead);
teamLead.addDevelopers(developerFirst);
var developers = teamLead.getDevelopers();
var projectsArray = director.getAllProjects();
console.log(projectsArray);
//console.log(projects);
//console.log(developers);
//console.log(managerAnn);
