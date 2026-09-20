// University stuff 


const universityCourses = document.getElementById("universityCourses");
const uniTitle = document.getElementById("universityCoursesTitle");
const uniStartX = parseFloat(uniTitle.getAttribute("x")) -147;
const uniStartY = parseFloat(uniTitle.getAttribute("y")) + 40 ;
// college stuff 



function generateUniCourse(course,x,y) {
    
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
universityCourses.appendChild(rect);
universityCourses.appendChild(text);
generatedCourses.add(course);

}




// Program course generator




// Generate university courses
function generateUniCourses() {
 generateUniCourse("ENG101", uniStartX, uniStartY);
    generateUniCourse("COM201", uniStartX + 360, uniStartY);
    generateUniCourse("PSY101", uniStartX + 180, uniStartY);

    generateUniCourse("ARAB101", uniStartX, uniStartY + 70);
    generateUniCourse("ARAB103", uniStartX + 180, uniStartY + 70);
    generateUniCourse("ARAB203", uniStartX + 360, uniStartY + 70);

    generateUniCourse("ISC101", uniStartX, uniStartY + 140);
    generateUniCourse("ISC103", uniStartX + 180, uniStartY + 140);
    generateUniCourse("ISC105", uniStartX + 360, uniStartY + 140);

    generateUniCourse("ISC203", uniStartX + 180, uniStartY + 210);
   
}

function generateCourse(course, containerId) {

    const container = document.getElementById(containerId);

    updateCoordinates(startX, startY);

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

    container.appendChild(rect);
    container.appendChild(text);
    generatedCourses.add(course);
}
 

function generateSmallCourse(course, containerId) {

    const container = document.getElementById(containerId);

    updateSmallCoordinates(startX, startY);

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

    container.appendChild(rect);
    container.appendChild(text);
    generatedCourses.add(course);
}