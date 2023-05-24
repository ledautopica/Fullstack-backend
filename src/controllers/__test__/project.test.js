const Chance = require("chance");

//What we want to test

const ProjectController = require("../projects");

//Dependencies

const ProjectService = require("../../services/projects");

const chance = new Chance();

//MOCK DEPENDENCIES
jest.mock("../../services/projects");

describe("when calling update project controller",()=>{
    let id, projectData, updatedProject, req, res;

    beforeEach(()=>{
        id = chance.guid();
        projectData = {
            name: chance.name(),
            description: chance.string(),
        };
        updatedProject = projectData;
        req = {
            params: {id},
            body: projectData,
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };

        ProjectService.updateProject = jest.fn().mockResolvedValue(updatedProject);
    });

});