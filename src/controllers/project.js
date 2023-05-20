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