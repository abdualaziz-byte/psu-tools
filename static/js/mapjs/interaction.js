let currentCourseCode = null;
let hoverInfoGroup = null;


function addWrappedInfoText(
    group,
    label,
    values,
    x,
    y,
    maxCharacters
) {

    const textElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );

    textElement.setAttribute("x", x);
    textElement.setAttribute("y", y);
    textElement.setAttribute(
        "class",
        "course-info-text"
    );

    const fullText =
        label === ""
            ? values
            : label + " " + values;

    const words = fullText.split(" ");

    let currentLine = "";
    let lineCount = 0;

    for (const word of words) {

        const testLine =
            currentLine === ""
                ? word
                : currentLine + " " + word;


        if (
            testLine.length > maxCharacters &&
            currentLine !== ""
        ) {

            const tspan =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "tspan"
                );

            tspan.setAttribute(
                "x",
                x
            );

            tspan.setAttribute(
                "dy",
                lineCount === 0
                    ? "0"
                    : "14"
            );

            tspan.textContent =
                currentLine;

            textElement.appendChild(
                tspan
            );

            currentLine = word;
            lineCount++;

        }
        else {

            currentLine = testLine;
        }
    }


    if (currentLine !== "") {

        const tspan =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "tspan"
            );

        tspan.setAttribute(
            "x",
            x
        );

        tspan.setAttribute(
            "dy",
            lineCount === 0
                ? "0"
                : "14"
        );

        tspan.textContent =
            currentLine;

        textElement.appendChild(
            tspan
        );

        lineCount++;
    }


    group.appendChild(
        textElement
    );

    return lineCount;
}


function showCourseInfo(courseCode) {

    const course =
        courses[courseCode];

    const nodeGroup =
        document.getElementById(
            courseCode + "Group"
        );


    if (nodeGroup === null) {
        return;
    }


    if (
        currentCourseCode !== null &&
        currentCourseCode !== courseCode
    ) {

        window.stopArrowPulse(
            currentCourseCode
        );


        const oldNodeGroup =
            document.getElementById(
                currentCourseCode + "Group"
            );


        if (oldNodeGroup !== null) {

            oldNodeGroup.classList.remove(
                "is-hovered"
            );
        }
    }


    currentCourseCode =
        courseCode;


    nodeGroup.classList.add(
        "is-hovered"
    );


    window.startArrowPulse(
        courseCode
    );


    if (hoverInfoGroup !== null) {

        hoverInfoGroup.remove();
    }


    const rect =
        document.getElementById(
            courseCode
        );


    if (rect === null) {
        return;
    }


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


    hoverInfoGroup =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
        );


    hoverInfoGroup.setAttribute(
        "class",
        "course-info"
    );


    const infoWidth =
        width * 1.5;

    const infoX =
        x - (infoWidth - width) / 2;

    const infoY =
        y;


    const background =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect"
        );


    background.setAttribute(
        "x",
        infoX
    );

    background.setAttribute(
        "y",
        infoY
    );

    background.setAttribute(
        "width",
        infoWidth
    );

    background.setAttribute(
        "height",
        1
    );

    background.setAttribute(
        "rx",
        "7"
    );


    background.setAttribute(
        "class",
        "course-info-background"
    );


    hoverInfoGroup.appendChild(
        background
    );


    let textY =
        infoY + 20;


    // --------------------------------------------------
    // SPECIAL MESSAGE
    // --------------------------------------------------

    const specialMessage =
        typeof course.specialMessage === "string"
            ? course.specialMessage
            : "";


    if (specialMessage !== "") {

        const messageLines =
            addWrappedInfoText(
                hoverInfoGroup,
                "",
                specialMessage,
                infoX + 8,
                textY,
                24
            );


        textY +=
            messageLines * 14 + 10;

    }

    // --------------------------------------------------
    // NORMAL COURSE INFORMATION
    // --------------------------------------------------

    else {

        const nameLines =
            addWrappedInfoText(
                hoverInfoGroup,
                "",
                course.name,
                infoX + 8,
                textY,
                24
            );


        textY +=
            nameLines * 14 + 8;


        const prerequisiteText =
            course.prev.length === 0
                ? "None"
                : course.prev.join(", ");


        const prerequisiteLines =
            addWrappedInfoText(
                hoverInfoGroup,
                "Prerequisites:",
                prerequisiteText,
                infoX + 8,
                textY,
                24
            );


        textY +=
            prerequisiteLines * 14 + 8;


        const nextText =
            course.next.length === 0
                ? "None"
                : course.next.join(", ");


        const nextLines =
            addWrappedInfoText(
                hoverInfoGroup,
                "Next:",
                nextText,
                infoX + 8,
                textY,
                24
            );


        textY +=
            nextLines * 14 + 10;
    }


    background.setAttribute(
        "height",
        textY - infoY
    );


    mapContent.appendChild(
        hoverInfoGroup
    );


    const infoGroup =
        hoverInfoGroup;


    requestAnimationFrame(
        function() {

            if (
                currentCourseCode !== courseCode
            ) {
                return;
            }


            infoGroup.classList.add(
                "is-open"
            );
        }
    );
}


function hideCourseInfo(courseCode) {

    if (
        currentCourseCode !== courseCode
    ) {
        return;
    }


    window.stopArrowPulse(
        courseCode
    );


    const nodeGroup =
        document.getElementById(
            courseCode + "Group"
        );


    if (nodeGroup !== null) {

        nodeGroup.classList.remove(
            "is-hovered"
        );
    }


    currentCourseCode = null;


    if (hoverInfoGroup !== null) {

        const oldInfoGroup =
            hoverInfoGroup;


        oldInfoGroup.classList.remove(
            "is-open"
        );


        hoverInfoGroup = null;


        setTimeout(
            function() {

                oldInfoGroup.remove();

            },
            300
        );
    }
}


for (
    const courseCode of generatedCourses
) {

    const nodeGroup =
        document.getElementById(
            courseCode + "Group"
        );


    if (nodeGroup === null) {
        continue;
    }


    nodeGroup.addEventListener(
        "mouseenter",
        function() {

            showCourseInfo(
                courseCode
            );
        }
    );


    nodeGroup.addEventListener(
        "mouseleave",
        function() {

            hideCourseInfo(
                courseCode
            );
        }
    );
}