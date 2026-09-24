let courseCode;

let holdTimer = null;
let holdAnimation = null;
let holdCourseCode = null;
let holdCircle = null;

let ignoreNextClick = null;

const HOLD_TIME = 700;
const OVERLAY_DELAY = 250;

// --------------------------------------------------
// HOLD COLORS
// --------------------------------------------------

const holdColors = [
{
position: 0,
color: [239, 68, 68]
},

{
    position: 0.35,
    color: [245, 120, 45]
},

{
    position: 0.68,
    color: [235, 190, 45]
},

{
    position: 1,
    color: [34, 197, 94]
}

];

function interpolateColor(color1, color2, amount) {

const r =
    Math.round(
        color1[0] +
        (color2[0] - color1[0]) * amount
    );

const g =
    Math.round(
        color1[1] +
        (color2[1] - color1[1]) * amount
    );

const b =
    Math.round(
        color1[2] +
        (color2[2] - color1[2]) * amount
    );

return `rgb(${r}, ${g}, ${b})`;

}

function getHoldColor(progress) {

for (let i = 0; i < holdColors.length - 1; i++) {

    const current = holdColors[i];
    const next = holdColors[i + 1];

    if (
        progress >= current.position &&
        progress <= next.position
    ) {

        const localProgress =
            (progress - current.position) /
            (next.position - current.position);

        return interpolateColor(
            current.color,
            next.color,
            localProgress
        );
    }
}

return "rgb(34, 197, 94)";

}

// --------------------------------------------------
// GET COURSE CODE
// --------------------------------------------------

function getCourseCodeFromEvent(event) {

let code = event.target.id;

if (code === "") {
    code = event.target.textContent;
}

return code;

}

// --------------------------------------------------
// HOVER OVERLAY
// --------------------------------------------------

function hideHoverOverlay() {

const overlays =
    document.querySelectorAll(".course-info");

for (const overlay of overlays) {

    overlay.classList.add(
        "hold-hidden"
    );
}

}

function restoreHoverOverlay() {

const overlays =
    document.querySelectorAll(".course-info");

for (const overlay of overlays) {

    overlay.classList.remove(
        "hold-hidden"
    );
}

}

// --------------------------------------------------
// CREATE HOLD CIRCLE
// --------------------------------------------------

function createHoldCircle(rect) {

const x =
    parseFloat(
        rect.getAttribute("x")
    );

const y =
    parseFloat(
        rect.getAttribute("y")
    );

const width =
    parseFloat(
        rect.getAttribute("width")
    );

const height =
    parseFloat(
        rect.getAttribute("height")
    );


const centerX =
    x + width / 2;

const centerY =
    y + height / 2;


const radius =
    Math.min(width, height) / 2 + 7;


const circumference =
    2 * Math.PI * radius;


holdCircle =
    document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );


holdCircle.setAttribute(
    "cx",
    centerX
);

holdCircle.setAttribute(
    "cy",
    centerY
);

holdCircle.setAttribute(
    "r",
    radius
);

holdCircle.setAttribute(
    "class",
    "hold-unlock-circle"
);


holdCircle.style.strokeDasharray =
    circumference;

holdCircle.style.strokeDashoffset =
    circumference;


holdCircle.style.setProperty(
    "--circle-length",
    circumference
);


mapContent.appendChild(
    holdCircle
);

}

// --------------------------------------------------
// START HOLD
// --------------------------------------------------

function startHold(event) {

const code =
    getCourseCodeFromEvent(event);

const course =
    courses[code];


if (!course) {
    return;
}


// Only locked courses can be held
if (
    course.taken ||
    course.takeable
) {
    return;
}


const rect =
    document.getElementById(code);


if (rect === null) {
    return;
}


holdCourseCode = code;


// Hide information overlay
hideHoverOverlay();


// Create circular progress
createHoldCircle(rect);


const startTime =
    performance.now();


// ----------------------------------------------
// COLOR ANIMATION
// ----------------------------------------------

function animateHold(currentTime) {

    if (
        holdCourseCode !== code
    ) {
        return;
    }


    const elapsed =
        currentTime - startTime;


    const progress =
        Math.min(
            elapsed / HOLD_TIME,
            1
        );


    // Change course color
    rect.setAttribute(
        "fill",
        getHoldColor(progress)
    );


    // Update circle progress
    if (holdCircle !== null) {

        const circumference =
            parseFloat(
                holdCircle.style
                    .getPropertyValue(
                        "--circle-length"
                    )
            );


        holdCircle.style.strokeDashoffset =
            circumference *
            (1 - progress);
    }


    if (progress < 1) {

        holdAnimation =
            requestAnimationFrame(
                animateHold
            );
    }
}


holdAnimation =
    requestAnimationFrame(
        animateHold
    );


// ----------------------------------------------
// COMPLETE HOLD
// ----------------------------------------------

holdTimer =
    setTimeout(function() {

        if (
            holdCourseCode !== code
        ) {
            return;
        }


        const course =
            courses[code];


        if (!course) {

            clearHold();

            return;
        }


        // Make sure the course ends green
        rect.setAttribute(
            "fill",
            "rgb(34, 197, 94)"
        );


        // Small completion animation
        if (holdCircle !== null) {

            holdCircle.classList.add(
                "hold-complete"
            );
        }


        // Recursively unlock prerequisites
        unlockBackwards(course);


        // Only the course the user
        // actually held enters FIFO
        turnOnCourse(course);


        // Prevent the click generated
        // by pointerup
        ignoreNextClick = code;


        // Finish the hold state
        finishHold();


    }, HOLD_TIME);

}

// --------------------------------------------------
// FINISH SUCCESSFUL HOLD
// --------------------------------------------------

function finishHold() {

if (holdTimer !== null) {

    clearTimeout(
        holdTimer
    );

    holdTimer = null;
}


if (holdAnimation !== null) {

    cancelAnimationFrame(
        holdAnimation
    );

    holdAnimation = null;
}


const completedCircle =
    holdCircle;


holdCircle = null;


if (completedCircle !== null) {

    setTimeout(function() {

        completedCircle.remove();

    }, 180);
}


holdCourseCode = null;


// Let the completion animation
// breathe before showing overlay.
setTimeout(function() {

    restoreHoverOverlay();

}, OVERLAY_DELAY);

}

// --------------------------------------------------
// CANCEL HOLD
// --------------------------------------------------

function clearHold() {

if (holdTimer !== null) {

    clearTimeout(
        holdTimer
    );

    holdTimer = null;
}


if (holdAnimation !== null) {

    cancelAnimationFrame(
        holdAnimation
    );

    holdAnimation = null;
}


if (holdCourseCode !== null) {

    const rect =
        document.getElementById(
            holdCourseCode
        );

    const course =
        courses[holdCourseCode];


    // If the user released early,
    // return the course to locked.
    if (
        rect !== null &&
        course !== undefined &&
        !course.taken &&
        !course.takeable
    ) {

        rect.setAttribute(
            "fill",
            "red"
        );
    }
}


if (holdCircle !== null) {

    holdCircle.remove();

    holdCircle = null;
}


holdCourseCode = null;


restoreHoverOverlay();

}

// --------------------------------------------------
// POINTER EVENTS
// --------------------------------------------------

mapContent.addEventListener(
"pointerdown",
function(event) {

    startHold(event);

}

);

mapContent.addEventListener(
"pointerup",
function(event) {

    if (
        holdCourseCode === null
    ) {
        return;
    }


    clearHold();

}

);

mapContent.addEventListener(
"pointercancel",
function(event) {

    clearHold();

}

);

// --------------------------------------------------
// NORMAL CLICK
// --------------------------------------------------

mapContent.addEventListener(
"click",
function(event) {

    courseCode =
        getCourseCodeFromEvent(
            event
        );


    if (courseCode === "") {
        return;
    }


    const course =
        courses[courseCode];


    if (!course) {
        return;
    }


    // Completed hold already handled
    // this click.
    if (
        ignoreNextClick === courseCode
    ) {

        ignoreNextClick = null;

        return;
    }


    // ------------------------------------------
    // CASE 1: TAKEN
    // ------------------------------------------

    if (course.taken) {

        turnOffCourse(course);


        // The course clicked becomes takeable
        course.takeable = true;


        updateCourseColor(
            course
        );
    }


    // ------------------------------------------
    // CASE 2: TAKEABLE
    // ------------------------------------------

    else if (course.takeable) {

        turnOnCourse(course);
    }


    // ------------------------------------------
    // CASE 3: LOCKED
    // ------------------------------------------

    else {

        // Locked courses require holding.
        return;
    }

}

);

// --------------------------------------------------
// INITIAL COURSE COLORS
// --------------------------------------------------

for (
const courseCode of generatedCourses
) {

const course =
    courses[courseCode];


if (!course) {

    console.log(
        "UNDEFINED:",
        courseCode
    );

    continue;
}


const rect =
    document.getElementById(
        courseCode
    );


if (rect === null) {
    continue;
}


if (
    course.prev.length === 0
) {

    rect.setAttribute(
        "fill",
        "yellow"
    );

    course.takeable = true;

}
else {

    rect.setAttribute(
        "fill",
        "red"
    );
}

}

// --------------------------------------------------
// TURN OFF COURSE
// --------------------------------------------------

function turnOffCourse(course) {

for (
    const nextCode of course.next
) {

    const nextCourse =
        courses[nextCode];


    if (!nextCourse.taken) {

        nextCourse.taken = false;
        nextCourse.takeable = false;

        updateCourseColor(
            nextCourse
        );

        continue;
    }


    turnOffCourse(
        nextCourse
    );
}


course.taken = false;
course.takeable = false;


updateCourseColor(
    course
);


const courseCode =
    Object.keys(courses).find(
        key => courses[key] === course
    );


window.removeFromFifo(
    courseCode
);

window.restorePreviousBranch(
    course
);

}

// --------------------------------------------------
// TURN ON COURSE
// --------------------------------------------------

function turnOnCourse(course) {

course.taken = true;


updateCourseColor(
    course
);


const courseCode =
    Object.keys(courses).find(
        key => courses[key] === course
    );


window.addToFifo(
    courseCode
);

window.fadePreviousBranch(
    course
);


for (
    const nextCode of course.next
) {

    const nextCourse =
        courses[nextCode];


    let canTake = true;


    for (
        const prevCode of nextCourse.prev
    ) {

        if (
            !courses[prevCode].taken
        ) {

            canTake = false;

            break;
        }
    }


    if (canTake) {

        console.log(
            "NEXT:",
            nextCode,
            "CAN TAKE:",
            canTake,
            "TAKEABLE:",
            nextCourse.takeable
        );


        nextCourse.takeable = true;


        updateCourseColor(
            nextCourse
        );
    }
}

}

// --------------------------------------------------
// UNLOCK BACKWARDS
// --------------------------------------------------

function unlockBackwards(course) {

if (course.taken) {
    return;
}


for (
    const prevCode of course.prev
) {

    const prevCourse =
        courses[prevCode];


    if (!prevCourse.taken) {

        unlockBackwards(
            prevCourse
        );
    }
}


course.taken = true;
course.takeable = true;


updateCourseColor(
    course
);

}

// --------------------------------------------------
// UPDATE COURSE COLOR
// --------------------------------------------------

function updateCourseColor(course) {

const courseCode =
    Object.keys(courses).find(
        key => courses[key] === course
    );


const rect =
    document.getElementById(
        courseCode
    );


if (rect === null) {
    return;
}


console.log(
    "COURSE:",
    courseCode
);

console.log(
    "RECT:",
    rect
);


if (course.taken) {

    rect.setAttribute(
        "fill",
        "green"
    );

}
else if (course.takeable) {

    rect.setAttribute(
        "fill",
        "yellow"
    );

}
else {

    rect.setAttribute(
        "fill",
        "red"
    );
}

}