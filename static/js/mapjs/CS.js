
let generatedCourses = new Set();

generateUniCourses();
generateCsCourses("Core Cs Courses", 200, 700);
generateCSCollegeCourses("CSCollege", 700, 1300);
generateCsElectives("CS Electives", 200, 200);
generateBusinessElective("Business Elective", 1110, 100);
generatePE("PE Elective", -700, 300);
generateFreeElective("Free Elective", -700, 600);




  
function generateCsCourses(id, x, y) {

    generateContainer(id, x, y);

    generateCourse("PHY105", id);
    generateCourse("PHY205", id);
    generateCourse("SCI101", id);

   generateCourse("MATH113", id);

    generateCourse("CS223", id);
    generateCourse("SE201", id);
    generateCourse("CS311", id);
    generateCourse("CS320", id);
    generateCourse("CS340", id);
    generateCourse("SE371", id);
    generateCourse("CYS401", id);
    generateCourse("CS435", id);
    generateCourse("CS499", id);
     generateCourse("CS492-coop-", id);


    makeTitle(id, "Program Required Courses");

    courseCounter = 0;
    gen = 0;
}




function generateCsElectives(id, x, y) {

    generateContainer(id, x, y);

    generateCourse("CS316", id);
    generateCourse("CS381", id);
    generateCourse("CS387", id);
    generateCourse("CS415", id);
    generateCourse("CS439", id);
    generateCourse("CS455", id);
    generateCourse("CS460", id);
    generateCourse("CS465", id);
    generateCourse("CS469", id);
    generateCourse("CS471", id);
    generateCourse("CS476", id);
    generateCourse("CS489", id);
    generateCourse("CS495", id);
generateCourse("IS_SE_CYS_DMS", id);
    makeTitle(id, "CS Elective Courses");

    courseCounter = 0;
    gen = 0;
}


function generateBusinessElective(id, x, y) {

    generateContainer(id, x, y);

    generateSmallCourse("ACC111", id);
    generateSmallCourse("BUS101", id);
    generateSmallCourse("ECON101", id);
    generateSmallCourse("ECON102", id);
generateSmallCourse("OTHER_BUSINESS", id);
    makeTitle(id, "Business Elective");

    smallCounter = 0;
    smallGen = 0;
}

function generatePE(id, x, y) {

    generateContainer(id, x, y);

    generateSmallCourse("PE1", id);
    generateSmallCourse("PE2", id);

    makeTitle(id, "Physical Education");

    smallCounter = 0;
    smallGen = 0;
}

function generateFreeElective(id, x, y) {

    generateContainer(id, x, y);
generateSmallCourse("FREE_ELECTIVE_1", id);
generateSmallCourse("FREE_ELECTIVE_2", id);
 
    makeTitle(id, "Free Electives");

    smallCounter = 0;
    smallGen = 0;
}