const Project = require("../models/projects");

exports.getProjects = async () =>{
    let projects = await Project.find().exec();
    return projects;
};