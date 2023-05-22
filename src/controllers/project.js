const ProjectServices = require("../services/projects");

exports.getProjects = async (req, res) => {
    try {
        let projects = await ProjectServices.getProjects();
        res.json({
            projects:projects,
        });
    }catch(err){
        console.error("err", err);
        res.status(500),json({
            message:"Projects were not retrieved",
        });
    }
};

exports.getProjectById = async (id) => {
    try {
        let project = ProjectService.getProjectById(req.params.id)
        res.json({
            project
        })
    } catch (err){
        console.error("err",err);
        rest.status(404).json({
            message:"Project was not found",
        })
    }
}