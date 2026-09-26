const fifo = [];

const availableFifoColors = new Set([
    "#3b82f6", // blue
    "#8b5cf6", // purple
    "#10b981", // green
    "#f59e0b", // orange
    "#ec4899"  // pink
]);

const arrowRegistry = {};

for (const courseCode of generatedCourses) {

    arrowRegistry[courseCode] = {
        fifoColor: null,
        prev: {},
        next: {}
    };

    const course = courses[courseCode];

    for (const nextCode of course.next) {
        arrowRegistry[courseCode].next[nextCode] =
            `${courseCode}to${nextCode}`;
    }

    for (const prevCode of course.prev) {
        arrowRegistry[courseCode].prev[prevCode] =
            `${prevCode}to${courseCode}`;
    }
}


// --------------------------------------------------
// ARROW STATES
// --------------------------------------------------

const REGULAR_ARROW_OPACITY = 0.2;
const FADED_ARROW_OPACITY = 0.12;
const COLORED_ARROW_OPACITY = 1;


// --------------------------------------------------
// PULSE
// --------------------------------------------------

const HOVER_PULSE_COLOR = "#06b6d4";

const pulsePaths = {};

let currentHoverCourseCode = null;


// --------------------------------------------------
// ARROW STATE FUNCTIONS
// --------------------------------------------------

function setArrowRegular(connectionName) {

    const arrows = arrowSegments[connectionName];

    for (const arrow of arrows) {
        arrow.style.stroke = "#9ca3af";
        arrow.style.opacity = REGULAR_ARROW_OPACITY;
    }
}


function setArrowFaded(connectionName) {

    const arrows = arrowSegments[connectionName];

    for (const arrow of arrows) {
        arrow.style.stroke = "#9ca3af";
        arrow.style.opacity = FADED_ARROW_OPACITY;
    }
}


function setArrowColored(connectionName, color) {

    const arrows = arrowSegments[connectionName];

    for (const arrow of arrows) {
        arrow.style.stroke = color;
        arrow.style.opacity = COLORED_ARROW_OPACITY;
    }
}


// --------------------------------------------------
// START HOVER PULSE
// --------------------------------------------------

function startArrowPulse(courseCode) {

    currentHoverCourseCode = courseCode;

    let color =
        arrowRegistry[courseCode].fifoColor;

    if (color === null) {
        color = HOVER_PULSE_COLOR;
    }

    for (const nextCode of courses[courseCode].next) {

        const connectionName =
            arrowRegistry[courseCode].next[nextCode];

        const path =
            pulsePaths[connectionName];

        if (path === undefined) {
            continue;
        }

        path.style.stroke = color;

        path.classList.add(
            "is-pulsing"
        );
    }
}


// --------------------------------------------------
// STOP HOVER PULSE
// --------------------------------------------------

function stopArrowPulse(courseCode) {

    if (currentHoverCourseCode === courseCode) {
        currentHoverCourseCode = null;
    }

    for (const nextCode of courses[courseCode].next) {

        const connectionName =
            arrowRegistry[courseCode].next[nextCode];

        const path =
            pulsePaths[connectionName];

        if (path === undefined) {
            continue;
        }

        path.classList.remove(
            "is-pulsing"
        );
    }
}


window.startArrowPulse = startArrowPulse;
window.stopArrowPulse = stopArrowPulse;


// --------------------------------------------------
// LIBAVOID
// --------------------------------------------------

const Avoid = window.AvoidLib;

const router = new Avoid.Router(
    Avoid.OrthogonalRouting
);


// --------------------------------------------------
// ROUTING SETTINGS
// --------------------------------------------------

router.setRoutingParameter(
    Avoid.idealNudgingDistance,
    15
);

router.setRoutingParameter(
    Avoid.segmentPenalty,
    1
);

router.setRoutingOption(
    Avoid.nudgeSharedPathsWithCommonEndPoint,
    true
);

router.setRoutingParameter(
    Avoid.shapeBufferDistance,
    10
);


// --------------------------------------------------
// CREATE OBSTACLES
// --------------------------------------------------

const shapeRefs = {};
const shapePins = {};

for (const courseCode of generatedCourses) {

    const rect =
        document.getElementById(courseCode);

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

    const shape =
        new Avoid.Rectangle(
            new Avoid.Point(x, y),
            new Avoid.Point(
                x + width,
                y + height
            )
        );

    const shapeRef =
        new Avoid.ShapeRef(
            router,
            shape
        );

    shapeRefs[courseCode] =
        shapeRef;


    const topPin =
        new Avoid.ShapeConnectionPin(
            shapeRef,
            1,
            0.5,
            0,
            true,
            0,
            Avoid.ConnDirNone
        );


    const bottomPin =
        new Avoid.ShapeConnectionPin(
            shapeRef,
            2,
            0.5,
            1,
            true,
            0,
            Avoid.ConnDirNone
        );


    topPin.setExclusive(false);
    bottomPin.setExclusive(false);


    shapePins[courseCode] = {
        top: topPin,
        bottom: bottomPin
    };
}


// --------------------------------------------------
// CREATE CONNECTIONS
// --------------------------------------------------

const connections = [];
const arrowSegments = {};

for (const courseCode of generatedCourses) {

    const course =
        courses[courseCode];

    for (const nextCode of course.next) {

        if (!generatedCourses.includes(nextCode)) {
            continue;
        }


        const connection =
            new Avoid.ConnRef(router);


        const start =
            new Avoid.ConnEnd(
                shapeRefs[courseCode],
                1
            );


        const end =
            new Avoid.ConnEnd(
                shapeRefs[nextCode],
                2
            );


        connection.setSourceEndpoint(start);
        connection.setDestEndpoint(end);


        const connectionName =
            arrowRegistry[courseCode].next[nextCode];


        arrowSegments[connectionName] = [];


        connections.push({
            name: connectionName,
            connection: connection
        });
    }
}


// --------------------------------------------------
// CALCULATE ROUTES
// --------------------------------------------------

router.processTransaction();


// --------------------------------------------------
// DRAW ROUTES
// --------------------------------------------------

for (const item of connections) {

    const connection =
        item.connection;

    const connectionName =
        item.name;

    const route =
        connection.displayRoute();

    const routePoints = [];


    for (
        let i = 0;
        i < route.size();
        i++
    ) {

        const point =
            route.get_ps(i);

        routePoints.push({
            x: point.get_x(),
            y: point.get_y()
        });
    }


    // ----------------------------------------------
    // NORMAL LINE SEGMENTS
    // ----------------------------------------------

    for (
        let i = 0;
        i < routePoints.length - 1;
        i++
    ) {

        const arrow =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line"
            );


        arrow.setAttribute(
            "x1",
            routePoints[i].x
        );

        arrow.setAttribute(
            "y1",
            routePoints[i].y
        );

        arrow.setAttribute(
            "x2",
            routePoints[i + 1].x
        );

        arrow.setAttribute(
            "y2",
            routePoints[i + 1].y
        );


        arrow.setAttribute(
            "stroke",
            "black"
        );


        if (
            i ===
            routePoints.length - 2
        ) {

            arrow.setAttribute(
                "marker-end",
                "url(#arrowhead)"
            );
        }


        arrowSegments[connectionName].push(
            arrow
        );

        mapContent.appendChild(
            arrow
        );
    }


    // ----------------------------------------------
    // HOVER PULSE PATH
    // ----------------------------------------------

    const hoverPath =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );


    let pathData =
        `M ${routePoints[0].x} ${routePoints[0].y}`;


    for (
        let i = 1;
        i < routePoints.length;
        i++
    ) {

        pathData +=
            ` L ${routePoints[i].x} ${routePoints[i].y}`;
    }


    hoverPath.setAttribute(
        "d",
        pathData
    );

    hoverPath.setAttribute(
        "pathLength",
        "1000"
    );

    hoverPath.setAttribute(
        "class",
        "arrow-pulse"
    );

    hoverPath.setAttribute(
        "pointer-events",
        "none"
    );


    pulsePaths[connectionName] =
        hoverPath;


    mapContent.appendChild(
        hoverPath
    );
}


// --------------------------------------------------
// PREVIOUS BRANCH
// --------------------------------------------------

function fadePreviousBranch(course) {

    for (const prevCode of course.prev) {

        const prevCourse =
            courses[prevCode];

        for (
            const previousPrevCode
            of prevCourse.prev
        ) {

            const connectionName =
                arrowRegistry[
                    previousPrevCode
                ].next[prevCode];


            setArrowFaded(
                connectionName
            );
        }
    }
}


window.fadePreviousBranch =
    fadePreviousBranch;


function restorePreviousBranch(course) {

    for (const prevCode of course.prev) {

        const prevCourse =
            courses[prevCode];

        for (
            const previousPrevCode
            of prevCourse.prev
        ) {

            const connectionName =
                arrowRegistry[
                    previousPrevCode
                ].next[prevCode];


            setArrowRegular(
                connectionName
            );
        }
    }
}


window.restorePreviousBranch =
    restorePreviousBranch;


// --------------------------------------------------
// FIFO RESTORE
// --------------------------------------------------

function restoreFifoArrows(courseCode) {

    for (
        const [
            nextCode,
            connectionName
        ]
        of Object.entries(
            arrowRegistry[courseCode].next
        )
    ) {

        if (
            arrowSegments[connectionName]
            === undefined
        ) {
            continue;
        }


        let shouldFade = false;


        for (
            const followingCode
            of courses[nextCode].next
        ) {

            if (
                courses[followingCode].taken
            ) {

                shouldFade = true;
                break;
            }
        }


        if (shouldFade) {

            setArrowFaded(
                connectionName
            );

        }

        else {

            setArrowRegular(
                connectionName
            );
        }
    }
}


// --------------------------------------------------
// FIFO ADD
// --------------------------------------------------

function addToFifo(courseCode) {

    if (
        courses[courseCode].next.length
        === 0
    ) {
        return;
    }


    if (fifo.length === 5) {

        const removed =
            fifo.shift();


        const oldColor =
            arrowRegistry[
                removed
            ].fifoColor;


        availableFifoColors.add(
            oldColor
        );


        arrowRegistry[
            removed
        ].fifoColor = null;


        restoreFifoArrows(
            removed
        );
    }


    const color =
        availableFifoColors
            .values()
            .next()
            .value;


    availableFifoColors.delete(
        color
    );


    fifo.push(
        courseCode
    );


    arrowRegistry[
        courseCode
    ].fifoColor = color;


    for (
        const nextCode
        of courses[courseCode].next
    ) {

        const connectionName =
            arrowRegistry[
                courseCode
            ].next[nextCode];


        if (
            arrowSegments[
                connectionName
            ] === undefined
        ) {
            continue;
        }


        setArrowColored(
            connectionName,
            color
        );
    }
}


// --------------------------------------------------
// FIFO REMOVE
// --------------------------------------------------

function removeFromFifo(courseCode) {

    const index =
        fifo.indexOf(courseCode);


    if (index === -1) {
        return;
    }


    fifo.splice(
        index,
        1
    );


    const color =
        arrowRegistry[
            courseCode
        ].fifoColor;


    availableFifoColors.add(
        color
    );


    arrowRegistry[
        courseCode
    ].fifoColor = null;


    restoreFifoArrows(
        courseCode
    );
}


window.addToFifo =
    addToFifo;

window.removeFromFifo =
    removeFromFifo;