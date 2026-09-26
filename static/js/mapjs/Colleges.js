let Cscollgecredits = 34
let UniCredits = 23


function generateCSCollegeCourses(id, x, y) {

    generateContainer(id, x, y, Cscollgecredits);

    generateCourse("CS101", id);
    generateCourse("CS175", id);
    generateCourse("MATH111", id);
    generateCourse("ENG103", id);
    generateCourse("CS102", id);
    generateCourse("STAT101", id);
    generateCourse("CS210", id);
    generateCourse("CS285", id);
    generateCourse("CS330", id);
    generateCourse("CS331", id);
    generateCourse("ETHC303", id);

    makeTitle(
        id,
        "0/" + Cscollgecredits + " CREDITS COMPLETED"
    );

    makeSectionTitle(
        id,
        "🏫 College Required Courses"
    );

    document.getElementById(id + "Title").setAttribute(
        "class",
        "map-title map-title-college"
    );

    courseCounter = 0;
    gen = 0;
}


function generateUniCourses(id, x, y) {

    generateContainer(id, x, y, UniCredits);

    generateCourse("ENG101", id);
    generateCourse("COM201", id);
    generateCourse("PSY101", id);

    generateCourse("ARAB101", id);
    generateCourse("ARAB103", id);
    generateCourse("ARAB203", id);

    generateCourse("ISC101", id);
    generateCourse("ISC103", id);
    generateCourse("ISC105", id);

    generateCourse("ISC203", id);

    makeTitle(
        id,
        "0/" + UniCredits + " CREDITS COMPLETED"
    );

    makeSectionTitle(
        id,
        "🎓 University Requirements"
    );

    document.getElementById(id + "Title").setAttribute(
        "class",
        "map-title map-title-university"
    );

    courseCounter = 0;
    gen = 0;
}