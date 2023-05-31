import http from "k6/http";

export let options = {
    vus:5,
    duration:"5s",
};

function getProjects(){
    let response = http.get("http://localhost:3000/projects/");
}

export default function () {
    getProjects();
}