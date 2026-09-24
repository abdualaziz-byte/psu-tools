
 

let x;
let y;
let startX;
let startY;
let smallCounter = 0;
let smallGen = 0;

let courseCounter = 0;
let gen = 0;





let totalCredits = 0;

function addCourseCredits(course) {
    totalCredits += course.credits;
}

function removeCourseCredits(course) {
    totalCredits -= course.credits;
}




/////////////////////////////////////// TESTING AREAAAAAAAAAAAA






function generateContainer(id, x, y) {

    const container = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
      
    );
  
        startX = x;
        startY = y;
    container.setAttribute("id", id);

    const anchor = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );

    anchor.setAttribute("x", x);
    anchor.setAttribute("y", y);
    anchor.setAttribute("id", id + "Anchor");

    container.appendChild(anchor);
    mapContent.appendChild(container);
}



function updateCoordinates(startX, startY) {

   let row;
let z;

courseCounter++;

if (courseCounter > 11) {
    courseCounter = 1;
    gen++;
}

if (courseCounter <= 4) {
    row = 0;
    z = courseCounter - 1;
}
else if (courseCounter <= 8) {
    row = 1;
    z = courseCounter - 5;
}
else {
    row = 2;
    z = courseCounter - 9;
}

y = startY - (row * 130) - (gen * 390);
x = startX + (z * 240);

if (row === 1) {
    if (z === 0) x -= 60;
    if (z === 3) x += 60;
}
else if (row === 2) {
    x = startX + 120 + (z * 240);
}
}

function makeTitle(id, titleText) {

    const container = document.getElementById(id);
    const anchor = document.getElementById(id + "Anchor");

    const title = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );

    let titleX = parseFloat(anchor.getAttribute("x"));

    if (smallCounter > 0 || smallGen > 0) {
        titleX += 150;
    } else {
        titleX += 320;
    }

    title.setAttribute("x", titleX);
    title.setAttribute("y", y - 50);
    title.setAttribute("text-anchor", "middle");

    title.textContent = titleText;

    container.appendChild(title);
}



function updateSmallCoordinates(startX, startY) {
  let row;

    smallCounter++;

    if (smallCounter > 2) {
        smallCounter = 1;
        smallGen++;
    }

    row = smallCounter - 1;

    y = startY - (smallGen * 80);
    x = startX + (row * 170);
}


