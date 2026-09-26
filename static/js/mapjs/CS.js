// =========================
// TRACK COUNTERS
// =========================
let cscoreCount = 41
let CsElectiveCount = 15
let BuisnessElectiveCount = 3
let PeCount = 2
let FreeElectiveCount = 6;

let aiElectiveCount = 6;
let aiCoreCount = 6;
let dxCoreCount = 6;
let dxElectiveCount = 6;
let cysCount = 12;


// =========================
// GENERATE CS MAP
// =========================
let maxcredits = 134

generateUniCourses("University Courses", 1300, 1700);

generateCsCourses("Core Cs Courses", 200, 1000);

generateCSCollegeCourses("CSCollege", 200, 1700);

generateCsElectives("CS Electives", 200, 200);

generateBusinessElective("Business Elective", 1300, 0);

generatePE("PE Elective", 1300, 400);

generateFreeElective("Free Elective", 1300, 800);


generateDXCore("Digital transformation track core", -300, 600);

generateDXElectives("Digital transformation track Electives", -300, 1000);

generateCYSTrack("CYS Track", -700, 675);

generateCYS403("CYS403Container", -700, 925);

generateAIDataScienceCore("AI & DS Core", -300, -50);

generateAIDataScienceElectives("AI & DS Electives", -300, 300);

makeText("Credithours", 370, -400, "0/" + maxcredits + " CREDITS COMPLETED");


// =========================
// PROGRAM REQUIRED COURSES
// =========================

function generateCsCourses(id, x, y) {

    generateContainer(id, x, y, cscoreCount);

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

    makeTitle(id, "0/" + cscoreCount + " CREDITS COMPLETED");

    document.getElementById(id + "Title").setAttribute(
        "class",
        "map-title-core"
    );

    makeSectionTitle(id, "🧠 Program Required Courses");

    courseCounter = 0;
    gen = 0;
}


// =========================
// CS ELECTIVES
// =========================

function generateCsElectives(id, x, y) {

    generateContainer(id, x, y, CsElectiveCount);

    generateCourse("CS381", id);
    generateCourse("CS387", id);
    generateCourse("CS415", id);
    generateCourse("CS439", id);
    generateCourse("CS455", id);
    generateCourse("CS460", id);
    generateCourse("CS476", id);
    generateCourse("CS489", id);
    generateCourse("CS495", id);
    generateCourse("IS/SE/CYS/DMS3XX/4XX", id);

    makeTitle(id, "0/" + CsElectiveCount + " CREDITS COMPLETED");

    document.getElementById(id + "Title").setAttribute(
        "class",
        "map-title-elective"
    );

    makeSectionTitle(id, "💻 CS Elective Courses");

    courseCounter = 0;
    gen = 0;
}


// =========================
// BUSINESS
// =========================

function generateBusinessElective(id, x, y) {

    generateContainer(id, x, y, BuisnessElectiveCount);

    generateSmallCourse("ACC111", id);
    generateSmallCourse("BUS101", id);
    generateSmallCourse("ECON101", id);
    generateSmallCourse("ECON102", id);
    generateSmallCourse("OTHER_BUSINESS", id);

    makeTitle(id, "0/" + BuisnessElectiveCount + " CREDITS COMPLETED");

    document.getElementById(id + "Title").setAttribute(
        "class",
        "map-title-business"
    );

    makeSectionTitle(id, "💼 Business Elective");

    smallCounter = 0;
    smallGen = 0;
}


// =========================
// PHYSICAL EDUCATION
// =========================

function generatePE(id, x, y) {

    generateContainer(id, x, y, PeCount);

    generateSmallCourse("PE1", id);
    generateSmallCourse("PE2", id);

    makeTitle(id, "0/" + PeCount + " CREDITS COMPLETED");

    document.getElementById(id + "Title").setAttribute(
        "class",
        "map-title-pe"
    );

    makeSectionTitle(id, "🏃 Physical Education");

    smallCounter = 0;
    smallGen = 0;
}


// =========================
// FREE ELECTIVES
// =========================

function generateFreeElective(id, x, y) {

    generateContainer(id, x, y, FreeElectiveCount);

    generateSmallCourse("FREE_ELECTIVE_1", id);
    generateSmallCourse("FREE_ELECTIVE_2", id);

    makeTitle(id, "0/" + FreeElectiveCount + " CREDITS COMPLETED");

    document.getElementById(id + "Title").setAttribute(
        "class",
        "map-title-free"
    );

    makeSectionTitle(id, "🎓 Free Electives");

    smallCounter = 0;
    smallGen = 0;
}


// =========================
// DIGITAL TRANSFORMATION
// =========================

function generateDXCore(id, x, y) {

    generateContainer(id, x, y, dxCoreCount);

    generateSmallCourse("IS450", id);
    generateSmallCourse("IS452", id);

    makeTitle(id, "0/" + dxCoreCount + " CREDITS COMPLETED");

    document.getElementById(id + "Title").setAttribute(
        "class",
        "map-title-dx"
    );

    makeSectionTitle(id, "☁️ Digital Transformation Track Core");

    smallCounter = 0;
    smallGen = 0;
}


function generateDXElectives(id, x, y) {

    generateContainer(id, x, y, dxElectiveCount);

    generateSmallCourse("IS453", id);
    generateSmallCourse("IS454", id);
    generateSmallCourse("IS463", id);
    generateSmallCourse("IS446", id);

    makeTitle(id, "0/" + dxElectiveCount + " CREDITS COMPLETED");

    document.getElementById(id + "Title").setAttribute(
        "class",
        "map-title-dx"
    );

    makeSectionTitle(id, "☁️ Digital Transformation Track Electives");

    smallCounter = 0;
    smallGen = 0;
}


// =========================
// CYBER SECURITY
// =========================

function generateCYSTrack(id, x, y) {

    generateContainer(id, x, y, cysCount);

    generateSmallCourse("CYS402", id);
    generateSmallCourse("CYS405", id);
    generateSmallCourse("CYS406", id);

    makeTitle(id, "0/" + cysCount + " CREDITS COMPLETED");

    document.getElementById(id + "Title").setAttribute(
        "class",
        "map-title-cys"
    );

    makeSectionTitle(id, "🔒 Cyber Security Track");

    smallCounter = 0;
    smallGen = 0;
}


function generateCYS403(id, x, y) {

    generateContainer(id, x, y, 0);

    generateSmallCourse("CYS403", id);

    makeTitle(
        id,
        "🔒/☁️Cybersecurity Track/Digital Transformation Track Elective"
    );

    smallCounter = 0;
    smallGen = 0;
}


// =========================
// AI & DATA SCIENCE
// =========================

function generateAIDataScienceCore(id, x, y) {

    generateContainer(id, x, y, aiCoreCount);

    generateSmallCourse("CS316", id);
    generateSmallCourse("CS465", id);

    makeTitle(id, "0/" + aiCoreCount + " CREDITS COMPLETED");

    document.getElementById(id + "Title").setAttribute(
        "class",
        "map-title-ai"
    );

    makeSectionTitle(id, "🤖 AI & Data Science Track Core");

    smallCounter = 0;
    smallGen = 0;
}


function generateAIDataScienceElectives(id, x, y) {

    generateContainer(id, x, y, aiElectiveCount);

    generateSmallCourse("CS469", id);
    generateSmallCourse("CS471", id);
    generateSmallCourse("CS481", id);
    generateSmallCourse("CS496", id);

    makeTitle(id, "0/" + aiElectiveCount + " CREDITS COMPLETED");

    document.getElementById(id + "Title").setAttribute(
        "class",
        "map-title-ai"
    );

    makeSectionTitle(id, "🤖 AI & Data Science Track Electives");

    smallCounter = 0;
    smallGen = 0;
}