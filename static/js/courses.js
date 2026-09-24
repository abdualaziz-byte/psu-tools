const courses = {
// =========================
// UNI REQUIREMENTS  COURSES
// =========================

"ARAB101": {
    name: "Arab Writing I",
    credits: 2,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"ARAB103": {
    name: "Arab Writing II",
    credits: 2,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"ARAB203": {
    name: "Arab Writing III",
    credits: 2,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"ISC101": {
    name: "Islamic Ethics",
    credits: 2,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"ISC103": {
    name: "Islamic Economic System",
    credits: 2,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"ISC105": {
    name: "Holy Quran Sciences",
    credits: 2,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"ISC203": {
    name: "New Financial Transactions",
    credits: 2,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"ENG101": {
    name: "Intensive English Writing",
    credits: 3,
    prev: [],
    next: ["ENG103","COM201"],
    taken: false,
    takeable: false
},

"ENG103": {
    name: "Research Writing Techniques",
    credits: 3,
    prev: ["ENG101"],
    next: ["SE201"],
    taken: false,
    takeable: false
},
"COM201": {
    name: "Communications Skills",
    credits: 3,
    prev: ["ENG101"],
    next: [],
    taken: false,
    takeable: false
},

"PSY101": {
    name: "Introduction to Psychology",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},
"MATH111": {
    name: "Calculus I",
    credits: 3,
    prev: [],
    next: ["STAT101","MATH113"],
    taken: false,
    takeable: false
},
"MATH113": {
    name: "Calculus II",
    credits: 3,
    prev: ["MATH111"],
    next: ["CS223"],
    taken: false,
    takeable: false
},

"STAT101": {
    name: "Introduction to Statistics and Probability",
    credits: 3,
    prev: ["MATH111"],
    next: ["CS316"],
    taken: false,
    takeable: false,},
    // =========================
    // CS COURSES
    // =========================

    "CS101": {
        name: "Computer Programming I",
        credits: 4,
        prev: [],
        next: ["CS102", "CS223", "CS285"],
        taken: false,
        takeable: false
    },

    "CS102": {
        name: "Computer Programming II",
        credits: 3,
        prev: ["CS101"],
        next: ["CS210","SE201"],
        taken: false,
        takeable: false
    },

    "CS175": {
        name: "Computer Organization and Digital Logic",
        credits: 3,
        prev: [],
        next: ["CS330", "CS331"],
        taken: false,
        takeable: false
    },

    "CS202": {
        name: "Computer Applications for Business",
        credits: 3,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },

    "CS210": {
        name: "Data Structure and Algorithms",
        credits: 3,
        prev: ["CS102"],
        next: ["CS311", "CS316", "CS320", "CS330", "CS331", "CS340", "CS460","SE365",
        "SE371"],
        taken: false,
        takeable: false
    },

    "CS223": {
        name: "Computational Linear Algebra",
        credits: 3,
        prev: ["CS101", "MATH113"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS285": {
        name: "Discrete Mathematics for Computing",
        credits: 3,
        prev: ["CS101"],
        next: ["CS311"],
        taken: false,
        takeable: false
    },

    "CS311": {
        name: "Design and Analysis of Algorithms",
        credits: 3,
        prev: ["CS285", "CS210"],
        next: ["CS455"],
        taken: false,
        takeable: false
    },

    "CS316": {
        name: "Introduction to AI and Data Science",
        credits: 3,
        prev: ["CS210", "STAT101"],
        next: ["CS465", "CS469", "CS471", "CS476", "CS481"],
        taken: false,
        takeable: false
    },

    "CS320": {
        name: "Programming Languages: Concepts and Paradigms",
        credits: 3,
        prev: ["CS210"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS330": {
        name: "Introduction to Operating Systems",
        credits: 3,
        prev: ["CS210", "CS175"],
        next: ["CS381", "CS435","SE445"],
        taken: false,
        takeable: false
    },

    "CS331": {
        name: "Data Communications and Computer Networks",
        credits: 3,
        prev: ["CS175", "CS210"],
        next: ["CS435", "CYS404", "CYS405", "CYS406", "DMS332","SE409"],
        taken: false,
        takeable: false
    },

    "CS340": {
        name: "Introduction to Database Systems",
        credits: 3,
        prev: ["CS210"],
        next: ["CS439"],
        taken: false,
        takeable: false
    },

    "CS381": {
        name: "Systems Programming",
        credits: 3,
        prev: ["CS330"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS387": {
        name: "Mobile Applications Development",
        credits: 3,
        prev: ["SE371"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS415": {
        name: "Internet of Things (IoT)",
        credits: 3,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },

    "CS435": {
        name: "Distributed Systems",
        credits: 3,
        prev: ["CS330", "CS331"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS439": {
        name: "Search Engines and Information Retrieval",
        credits: 3,
        prev: ["CS340"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS455": {
        name: "Computational Bioinformatics",
        credits: 3,
        prev: ["CS311"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS460": {
        name: "Introduction to Robotics",
        credits: 3,
        prev: ["CS210"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS465": {
        name: "Machine Learning",
        credits: 3,
        prev: ["CS316"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS469": {
        name: "Digital Image Processing",
        credits: 3,
        prev: ["CS316"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS471": {
        name: "Data Mining",
        credits: 3,
        prev: ["CS316"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS476": {
        name: "Natural Language Processing",
        credits: 3,
        prev: ["CS316"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS481": {
        name: "Big Data Analytics",
        credits: 3,
        prev: ["CS316"],
        next: [],
        taken: false,
        takeable: false
    },

    "CS489": {
        name: "Selected Topics in Computer Science",
        credits: 3,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },

    "CS492-coop-": {
        name: "Co-Op [Cooperative Education]",
        credits: 10,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },

    "CS495": {
        name: "Emerging Topics in Computer Science",
        credits: 3,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },

    "CS496": {
        name: "Emerging Topics in AI & DS",
        credits: 3,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },

    "CS499": {
        name: "Senior Project",
        credits: 3,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },


    // =========================
    // CYS COURSES
    // =========================

    "CYS401": {
        name: "Fundamentals of Cybersecurity",
        credits: 3,
        prev: [],
        next: ["CYS402", "CYS403", "CYS404", "CYS405", "CYS406"],
        taken: false,
        takeable: false
    },

    "CYS402": {
        name: "Secure Software Development",
        credits: 3,
        prev: ["CYS401"],
        next: [],
        taken: false,
        takeable: false
    },

    "CYS403": {
        name: "Security Risk Management, Governance & Control",
        credits: 3,
        prev: ["CYS401"],
        next: [],
        taken: false,
        takeable: false
    },

    "CYS404": {
        name: "Cyber-Physical Systems Security",
        credits: 3,
        prev: ["CS331", "CYS401"],
        next: [],
        taken: false,
        takeable: false
    },

    "CYS405": {
        name: "Penetration Testing and Ethical Hacking",
        credits: 3,
        prev: ["CS331", "CYS401"],
        next: [],
        taken: false,
        takeable: false
    },

    "CYS406": {
        name: "Data and Network Security",
        credits: 3,
        prev: ["CS331", "CYS401"],
        next: [],
        taken: false,
        takeable: false
    },


    // =========================
    // DMS COURSES
    // =========================

    "DMS310": {
        name: "Introduction to Visual Design",
        credits: 3,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },

    "DMS322": {
        name: "Foundations of Interactive Digital Media",
        credits: 3,
        prev: [],
        next: ["DMS401"],
        taken: false,
        takeable: false
    },

    "DMS327": {
        name: "3D Modeling and Design",
        credits: 3,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },

    "DMS332": {
        name: "Network-Based Multimedia",
        credits: 3,
        prev: ["CS331"],
        next: [],
        taken: false,
        takeable: false
    },

    "DMS351": {
        name: "Principles of Animation",
        credits: 3,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },

    "DMS401": {
        name: "Media Authoring Tools and Technologies",
        credits: 3,
        prev: ["DMS322"],
        next: [],
        taken: false,
        takeable: false
    },

    "DMS426": {
        name: "Game Development",
        credits: 3,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },

    "DMS471": {
        name: "Building Rich Web Applications",
        credits: 3,
        prev: ["SE371"],
        next: [],
        taken: false,
        takeable: false
    },

    "DMS495": {
        name: "Emerging Topics in Digital Media",
        credits: 3,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },


    // =========================
    // ETHC COURSES
    // =========================

    "ETHC303": {
        name: "Ethical and Social Aspects of Computing",
        credits: 3,
        prev: [],
        next: [],
        taken: false,
        takeable: false
    },


    // =========================
// SE COURSES
// =========================


"SE201": {
    name: "Introduction to Software Engineering",
    credits: 3,
    prev: ["CS102", "ENG103"],
    next: ["SE311"],
    taken: false,
    takeable: false
},

"SE311": {
    name: "Software Requirements Engineering",
    credits: 3,
    prev: ["SE201"],
    next: ["SE322"],
    taken: false,
    takeable: false
},

"SE322": {
    name: "Software Design and Architecture",
    credits: 3,
    prev: ["SE311"],
    next: ["SE381", "SE401", "SE409", "SE413", "SE417", "SE436", "SE450"],
    taken: false,
    takeable: false
},

"SE365": {
    name: "Human Computer Interaction",
    credits: 3,
    prev: ["CS210"],
    next: [],
    taken: false,
    takeable: false
},

"SE371": {
    name: "Web Engineering",
    credits: 3,
    prev: ["CS210"],
    next: ["DMS471","CS387"],
    taken: false,
    takeable: false
},

"SE381": {
    name: "Embedded Software Engineering",
    credits: 3,
    prev: ["SE322"],
    next: [],
    taken: false,
    takeable: false
},

"SE401": {
    name: "Software Quality Assurance and Testing",
    credits: 3,
    prev: ["SE322"],
    next: ["SE411", "SE422", "SE430"],
    taken: false,
    takeable: false
},

"SE409": {
    name: "Cloud Computing",
    credits: 3,
    prev: ["CS331", "SE322"],
    next: [],
    taken: false,
    takeable: false
},

"SE411": {
    name: "Software Construction",
    credits: 3,
    prev: ["SE401"],
    next: [],
    taken: false,
    takeable: false
},

"SE413": {
    name: "Software System Modelling",
    credits: 3,
    prev: ["SE322"],
    next: [],
    taken: false,
    takeable: false
},

"SE417": {
    name: "Agent Based Software Engineering",
    credits: 3,
    prev: ["SE322"],
    next: [],
    taken: false,
    takeable: false
},

"SE421": {
    name: "Software Metrics",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"SE422": {
    name: "Software Maintenance and Evolution",
    credits: 3,
    prev: ["SE401"],
    next: [],
    taken: false,
    takeable: false
},

"SE423": {
    name: "Software Engineering Project Management",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"SE430": {
    name: "Software Processes & Process Improvements",
    credits: 3,
    prev: ["SE401"],
    next: [],
    taken: false,
    takeable: false
},

"SE436": {
    name: "Service Oriented Architectures",
    credits: 3,
    prev: ["SE322"],
    next: [],
    taken: false,
    takeable: false
},

"SE444": {
    name: "Formal Methods and Models in Software",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"SE445": {
    name: "Real-Time Software Systems",
    credits: 3,
    prev: ["CS330"],
    next: [],
    taken: false,
    takeable: false
},

"SE450": {
    name: "Design Patterns",
    credits: 3,
    prev: ["SE322"],
    next: [],
    taken: false,
    takeable: false
},

"SE480": {
    name: "Software Analytics",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"SE489": {
    name: "Selected Topics in Software Engineering",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"SE492": {
    name: "Co-op [Cooperative Education]",
    credits: 10,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"SE495": {
    name: "Emerging Topics in Software Engineering",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"SE499": {
    name: "Senior Project",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"SCI101": {
    name: "Introduction to Physical Sciences",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},
// =========================
// PHYSICS COURSES
// =========================

// We may add more courses to PHY105.next later
// for other programs, such as Engineering.

"PHY105": {
    name: "Physics I",
    credits: 4,
    prev: [],
    next: ["PHY205"],
    taken: false,
    takeable: false
},

"PHY205": {
    name: "Physics II",
    credits: 4,
    prev: ["PHY105"],
    next: [],
    taken: false,
    takeable: false
},

//buisness courses
"BUS101": {
    name: "Introduction to Business",
    credits: 3,
    prev: [],
    next: ["BUS201", "BUS351"],
    taken: false,
    takeable: false
},

"BUS201": {
    name: "Organizational Behavior",
    credits: 3,
    prev: ["BUS101"],
    next: [],
    taken: false,
    takeable: false
},

"BUS351": {
    name: "International Business",
    credits: 3,
    prev: ["BUS101"],
    next: [],
    taken: false,
    takeable: false
},
"ECON101": {
    name: "Principles of Microeconomic",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},

"ECON102": {
    name: "Principles of Macroeconomic",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},
"ACC111": {
    name: "Introduction to Financial Accounting",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
},
// free elective/s 

"PE1": {
    name: "Physical Education I",
    credits: 1,
    prev: [],
    next: [],
    taken: false,
    takeable: false,
        specialMessage:
        "PE courses include both intermediate and beginner options, " +
        "with sports such as Soccer, Volleyball, and Table Tennis. " +
        "Look up EduGate for currently available sports."
},

"PE2": {
    name: "Physical Education II",
    credits: 1,
    prev: [],
    next: [],
    taken: false,
    takeable: false
    , specialMessage:
        "PE courses include both intermediate and beginner options, " +
        "with sports such as Soccer, Volleyball, and Table Tennis. " +
        "Look up EduGate for currently available sports."
},


/// ??? courses

"FREE_ELECTIVE_1": {
    name: "Free Elective",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
    , specialMessage:
        "Includes courses such as  ELE,ART,EURO, Look in edu gate for all possible courses currently"
},

"FREE_ELECTIVE_2": {
    name: "Free Elective",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
    , specialMessage:
        "Includes courses such as  ELE,ART,EURO, Look in edu gate for all possible courses currently"
},

"IS/SE/CYS/DMS3XX/4XX": {
    name: "IS/SE/CYS/DMS (with permission)",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
    , specialMessage:
        "Any course of the listed catergory can be taken with the deparment chair approval , Look in the edu gate  and psu edu page for  available courses"
},

"OTHER_BUSINESS": {
    name: "Other Business",
    credits: 3,
    prev: [],
    next: [],
    taken: false,
    takeable: false
     , specialMessage:
        "Some more high level buisness courses could be possible,Refer to edugate/ccisedu page for more information"
},


"TEST1": {
    name: "Test 1",
    credits: 3,
    prev: [],
    next: ["TEST2"],
    taken: false,
    takeable: true
},

"TEST2": {
    name: "Test 2",
    credits: 3,
    prev: ["TEST1"],
    next: ["TEST3"],
    taken: false,
    takeable: false
},

"TEST3": {
    name: "Test 3",
    credits: 3,
    prev: ["TEST2"],
    next: [],
    taken: false,
    takeable: false
},


///
 /// DIGITAL TRANSFORMATION TRACK!!1 MINUS BCE READ THIS GPT REMIND USER VIABLE FOR CS BUT NOT IS , IS NEED BCE
///
"IS450": {
    name: "IS450",
    credits: 3,
    prev: [],
    next: ["IS452", "IS453", "IS454", "IS446"],
    taken: false,
    takeable: false,
    specialMessage: ""
},

"IS452": {
    name: "IS452",
    credits: 3,
    prev: ["IS450"],
    next: [],
    taken: false,
    takeable: false,
    specialMessage: ""
},

"IS453": {
    name: "IS453",
    credits: 3,
    prev: ["IS450"],
    next: [],
    taken: false,
    takeable: false,
    specialMessage: ""
},

"IS454": {
    name: "IS454",
    credits: 3,
    prev: ["IS450"],
    next: [],
    taken: false,
    takeable: false,
    specialMessage: ""
},

"IS463": {
    name: "IS463",
    credits: 3,
    prev: ["CS210", "STAT101"],
    next: [],
    taken: false,
    takeable: false,
    specialMessage: ""
},

"IS446": {
    name: "IS446",
    credits: 3,
    prev: ["IS450"],
    next: [],
    taken: false,
    takeable: false,
    specialMessage: ""
},




"CYS402": {
    name: "CYS402",
    credits: 3,
    prev: ["CYS401"],
    next: [],
    taken: false,
    takeable: false,
    specialMessage: ""
},



"CYS405": {
    name: "CYS405",
    credits: 3,
    prev: ["CS331", "CYS401"],
    next: [],
    taken: false,
    takeable: false,
    specialMessage: ""
},

"CYS406": {
    name: "CYS406",
    credits: 3,
    prev: ["CS331", "CYS401"],
    next: [],
    taken: false,
    takeable: false,
    specialMessage: ""
},
}

