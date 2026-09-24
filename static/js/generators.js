// University stuff 
let generatedCourses = [];

const universityCourses = document.getElementById("universityCourses");
const uniTitle = document.getElementById("universityCoursesTitle");
const uniStartX = parseFloat(uniTitle.getAttribute("x")) -147;
const uniStartY = parseFloat(uniTitle.getAttribute("y")) + 40 ;
// college stuff 



function generateUniCourse(course,x,y) {
    
    const nodeGroup = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
    );

    nodeGroup.setAttribute("class", "course-node-group");
    nodeGroup.setAttribute("id", course + "Group");

    const text = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
);
const rect = document.createElementNS(
    "http://www.w3.org/2000/svg", 
    "rect"
);
    rect.setAttribute("id", course);
rect.setAttribute("width", 130);
rect.setAttribute("height", 50);
rect.setAttribute("x", x);
rect.setAttribute("y", y);

rect.setAttribute("fill", "white");
rect.setAttribute("stroke", "black");
text.setAttribute("x", x + rect.getAttribute("width") / 2);
text.setAttribute("y", y + rect.getAttribute("height") / 2);
text.setAttribute("text-anchor", "middle");
text.setAttribute("dominant-baseline", "middle");

text.textContent = course;

nodeGroup.appendChild(rect);
nodeGroup.appendChild(text);
universityCourses.appendChild(nodeGroup);

generatedCourses.push(course);
}




// Program course generator




// Generate university courses


function generateCourse(course, containerId) {

    const container = document.getElementById(containerId);

    updateCoordinates(startX, startY);

    const nodeGroup = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
    );

    nodeGroup.setAttribute("class", "course-node-group");
    nodeGroup.setAttribute("id", course + "Group");

    const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );

    const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );

    rect.setAttribute("class", "course-node");
    rect.setAttribute("id", course);
    rect.setAttribute("width", 130);
    rect.setAttribute("height", 50);
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);

    rect.setAttribute("fill", "white");
    rect.setAttribute("stroke", "black");

    text.setAttribute("x", x + rect.getAttribute("width") / 2);
    text.setAttribute("y", y + rect.getAttribute("height") / 2);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");

    text.textContent = course;

    nodeGroup.appendChild(rect);
    nodeGroup.appendChild(text);
    container.appendChild(nodeGroup);

    generatedCourses.push(course);
}
 

function generateSmallCourse(course, containerId) {

    const container = document.getElementById(containerId);

    updateSmallCoordinates(startX, startY);

    const nodeGroup = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
    );

    nodeGroup.setAttribute("class", "course-node-group");
    nodeGroup.setAttribute("id", course + "Group");

    const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );

    const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );

    rect.setAttribute("class", "course-node");
    rect.setAttribute("id", course);
    rect.setAttribute("width", 130);
    rect.setAttribute("height", 50);
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);

    rect.setAttribute("fill", "white");
    rect.setAttribute("stroke", "black");

    text.setAttribute("x", x + rect.getAttribute("width") / 2);
    text.setAttribute("y", y + rect.getAttribute("height") / 2);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");

    text.textContent = course;

    nodeGroup.appendChild(rect);
    nodeGroup.appendChild(text);
    container.appendChild(nodeGroup);

    generatedCourses.push(course);
}