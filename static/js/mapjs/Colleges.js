function generateCSCollegeCourses(id, x, y) {

    
    generateContainer(id, x, y);

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

    makeTitle(id, "College Required Courses");

    courseCounter = 0;
    gen = 0;
}

//linking courses 
function linkCourses(course1, course2) {

}