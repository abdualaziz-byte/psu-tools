let courseCode;


for (const courseCode of generatedCourses) {

    const course = courses[courseCode];

    for (const nextCode of course.next) {

        if (generatedCourses.has(nextCode)) {

            const prevRect = document.getElementById(courseCode);
            const courseRect = document.getElementById(nextCode);

            const prevX = parseFloat(prevRect.getAttribute("x"));
            const prevY = parseFloat(prevRect.getAttribute("y"));
            const prevWidth = parseFloat(prevRect.getAttribute("width"));
            const prevHeight = parseFloat(prevRect.getAttribute("height"));

            const courseX = parseFloat(courseRect.getAttribute("x"));
            const courseY = parseFloat(courseRect.getAttribute("y"));
            const courseWidth = parseFloat(courseRect.getAttribute("width"));
            const courseHeight = parseFloat(courseRect.getAttribute("height"));

            const x1 = prevX + prevWidth / 2;
            const y1 = prevY;

            const x2 = courseX + courseWidth / 2;
            const y2 = courseY + courseHeight;

            // create arrow

             const arrow = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "line"
                );

                arrow.setAttribute("x1", x1);
                arrow.setAttribute("y1", y1);
                arrow.setAttribute("x2", x2);
                arrow.setAttribute("y2", y2);

                arrow.setAttribute("stroke", "black");
                arrow.setAttribute("stroke-width", "2");

                mapContent.appendChild(arrow);
        }
    }
}
mapContent.addEventListener("click", function(event) {

     courseCode = event.target.id;

    if (courseCode === "") {
        courseCode = event.target.textContent;
    }

    const course = courses[courseCode];


    // Case 1: Course is taken
    if (course.taken) {

        turnOffCourse(course);

        // The course the user actually clicked becomes takeable
        course.takeable = true;
                        updateCourseColor(course);

    }


    // Case 2: Course is takeable
    else if (course.takeable) {

        turnOnCourse(course);
    }


    // Case 3: Course is locked
    else {

        unlockBackwards(course);

        // Now propagate the changes forward
        turnOnCourse(course);
    }

});

for (const courseCode of generatedCourses) {

    const course = courses[courseCode];
    const rect = document.getElementById(courseCode);

    if (course.prev.length === 0) {
        rect.setAttribute("fill", "yellow");
    } 
    else {
        rect.setAttribute("fill", "red");
    }
}

  











 function turnOffCourse(course) {

    

    for (const nextCode of course.next) {

        const nextCourse = courses[nextCode];

        if (!nextCourse.taken) {
            nextCourse.taken = false;
            nextCourse.takeable = false;
                        updateCourseColor(nextCourse);

            continue;
        }

        turnOffCourse(nextCourse);
    }

    course.taken = false;
    course.takeable = false;
                updateCourseColor(course);

}



function turnOnCourse(course) {
    course.taken = true;
            updateCourseColor(course);

    for (const nextCode of course.next) {

        const nextCourse = courses[nextCode];

        let canTake = true;

        for (const prevCode of nextCourse.prev) {

            if (!courses[prevCode].taken) {
                canTake = false;
                
                break;
            }
        }

        if (canTake) {
                console.log("NEXT:", nextCode, "CAN TAKE:", canTake, "TAKEABLE:", nextCourse.takeable);
            nextCourse.takeable = true;
            updateCourseColor(nextCourse);
        }
    }
}



function unlockBackwards(course) {

    // Base case: already taken
    if (course.taken) {
        return;
    }

   

    // Work backwards through prerequisites
    for (const prevCode of course.prev) {

        const prevCourse = courses[prevCode];

        if (!prevCourse.taken) {
            unlockBackwards(prevCourse);
        }
    }

    // Once we've handled the prerequisites,
    // turn this course on
    course.taken = true;
    course.takeable = true;
                updateCourseColor(course);

}

for (const courseCode of generatedCourses) {

    const course = courses[courseCode];

    if (!course) {
        console.log("UNDEFINED:", courseCode);
        continue;
    }

    const rect = document.getElementById(courseCode);

    if (course.prev.length === 0) {
        rect.setAttribute("fill", "yellow");
    } else {
        rect.setAttribute("fill", "red");
    }
}



function updateCourseColor(course) {

       const courseCode = Object.keys(courses).find(
        key => courses[key] === course
    );

    const rect = document.getElementById(courseCode);
    console.log("COURSE:", courseCode);
    console.log("RECT:", rect);
    if (course.taken) {
        rect.setAttribute("fill", "green");
    }
    else if (course.takeable) {
        rect.setAttribute("fill", "yellow");
    }
    else {
        rect.setAttribute("fill", "red");
    }
}

