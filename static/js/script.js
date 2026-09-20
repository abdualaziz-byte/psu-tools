const input = document.getElementById("courseamount");
const error = document.getElementById("error");
const gpaerror = document.getElementById("gpaerror");
const hourserror = document.getElementById("hourserror");

const container = document.getElementById("container");
const submitButton = document.getElementById("submit");
const currentgpa = document.getElementById("currentgpa");
const currenthours = document.getElementById("currenthours");
const result = document.getElementById("result");
const targetgpa = document.getElementById("targetgpa");
const failedhours = document.getElementById("failedhours");
const targetresult = document.getElementById("targetresult");


currenthours.addEventListener("input", checkTargetGPA);
currentgpa.addEventListener("input", calculateGPA);
currenthours.addEventListener("input", calculateGPA);
failedhours.addEventListener("input", calculateGPA);
container.addEventListener("input", Gettargetgpa);
currentgpa.addEventListener("input", Gettargetgpa);
currenthours.addEventListener("input", Gettargetgpa);
failedhours.addEventListener("input", Gettargetgpa);

targetgpa.addEventListener("input", Gettargetgpa);




container.addEventListener("input", calculateGPA);
//target gpa 

const grades = [
    { name: "A+", value: 4.0 },
    { name: "A", value: 3.75 },
    { name: "B+", value: 3.5 },
    { name: "B", value: 3.0 },
    { name: "C+", value: 2.5 },
    { name: "C", value: 2.0 },
    { name: "D+", value: 1.5 },
    { name: "D", value: 1.0 },
    { name: "F", value: 0.0 }
];

targetgpa.addEventListener("input", function() {

    if (this.value > 4) {
        this.value = 4;
    } 
    else if (this.value < 0) {
        this.value = 0;
    }
});

function checkTargetGPA() {
    if (currentgpa.value !== "" && input.value !== "" &&
        currenthours.value !== "") {
        targetgpa.hidden = false;
    } else {
        
    }
}

currentgpa.addEventListener("input", checkTargetGPA);
input.addEventListener("input", checkTargetGPA);

    let previousinput  = 0;
    let warning = false;


    


currentgpa.addEventListener("input", function() {
if (this.value > 4.0) {
        
        this.value = 4.0;
        gpaerror.textContent = " gpa must be less than or equal to 4.0";
    } else if (this.value < 0) {
        this.value = 0;
        gpaerror.textContent = " gpa must be greater than or equal to 0";

    }

    
     else {
        gpaerror.textContent = "";
     }
    });

currenthours.addEventListener("input", function() {

     if (this.value > 150) {
        
        this.value = 150;
        hourserror.textContent = " completed hours must be less than or equal to 150";
    } else if (this.value < 0) {
        this.value = 0;
        hourserror.textContent = " completed hours must be greater than or equal to 0";

    }
    
     else {
        hourserror.textContent = "";
     }});

        

input.addEventListener("input", function() {
    let value  = Number(this.value);

     if (value <= 12) { warning = false  ;}
  
              if (value > 12) {
                        error.textContent = " taken courses must be less than or equal to 12";
                        warning = true
                        this.value = 12;
                    value = 12;
   
    }if (value < 0) {
        this.value = 0;
        error.textContent = " taken courses must be greater than or equal to 0";
previousinput  = 0;
    }
    else if (value === 0) {
        error.textContent = "";
        container.innerHTML = "";
      submitButton.hidden = true;
previousinput  = 0;
    }
     else {
        if (value > previousinput) {
               if (   !warning) {error.textContent = "";}
for (let i = previousinput + 1; i <= value; i++) {

    const input = document.createElement("input");

    input.type = "number";
    input.id = "credithr" + i;
    input.placeholder = "credit hours";
    input.min = 0;
    input.max = 12;
    const inputG = document.createElement("select");

    inputG.id = "grade" + i;

    const optionApls = document.createElement("option");
    optionApls.textContent = "A+";
    optionApls.value = "4.0";

    const optionA = document.createElement("option");
    optionA.textContent = "A";
    optionA.value = "3.75";

    const optionBpls = document.createElement("option");
    optionBpls.textContent = "B+";
    optionBpls.value = "3.5";

    const optionB = document.createElement("option");
    optionB.textContent = "B";
    optionB.value = "3.0";

    const optionCpls = document.createElement("option");
    optionCpls.textContent = "C+";
    optionCpls.value = "2.5";

    const optionC = document.createElement("option");
    optionC.textContent = "C";
    optionC.value = "2.0";

    const optionDpls = document.createElement("option");
    optionDpls.textContent = "D+";
    optionDpls.value = "1.5";

    const optionD = document.createElement("option");
    optionD.textContent = "D";
    optionD.value = "1.0";

    const optionF = document.createElement("option");
    optionF.textContent = "F";
    optionF.value = "0.0";

    inputG.appendChild(optionApls);
    inputG.appendChild(optionA);
    inputG.appendChild(optionBpls);
    inputG.appendChild(optionB);
    inputG.appendChild(optionCpls);
    inputG.appendChild(optionC);
    inputG.appendChild(optionDpls);
    inputG.appendChild(optionD);
    inputG.appendChild(optionF);

    container.appendChild(input);
    container.appendChild(inputG);

}
previousinput = Number(this.value) ;
              submitButton.hidden = false;
             

        }
        
        else  if (this.value === "") {
       
    }
   
    
  else  if (value < previousinput) {
                   if (   !warning) {error.textContent = "";}

       
                container.innerHTML = "";

      previousinput = 0;
      for (let i = previousinput + 1; i <= value; i++) {

    const input = document.createElement("input");

    input.type = "number";
    input.id = "credithr" + i;
    input.placeholder = "credit hours";
    input.min = 0;
    input.max = 12;

    const inputG = document.createElement("select");

    inputG.id = "grade" + i;

    const optionApls = document.createElement("option");
    optionApls.textContent = "A+";
    optionApls.value = "4.0";

    const optionA = document.createElement("option");
    optionA.textContent = "A";
    optionA.value = "3.75";

    const optionBpls = document.createElement("option");
    optionBpls.textContent = "B+";
    optionBpls.value = "3.5";

    const optionB = document.createElement("option");
    optionB.textContent = "B";
    optionB.value = "3.0";

    const optionCpls = document.createElement("option");
    optionCpls.textContent = "C+";
    optionCpls.value = "2.5";

    const optionC = document.createElement("option");
    optionC.textContent = "C";
    optionC.value = "2.0";

    const optionDpls = document.createElement("option");
    optionDpls.textContent = "D+";
    optionDpls.value = "1.5";

    const optionD = document.createElement("option");
    optionD.textContent = "D";
    optionD.value = "1.0";

    const optionF = document.createElement("option");
    optionF.textContent = "F";
    optionF.value = "0.0";

    inputG.appendChild(optionApls);
    inputG.appendChild(optionA);
    inputG.appendChild(optionBpls);
    inputG.appendChild(optionB);
    inputG.appendChild(optionCpls);
    inputG.appendChild(optionC);
    inputG.appendChild(optionDpls);
    inputG.appendChild(optionD);
    inputG.appendChild(optionF);

    container.appendChild(input);
    container.appendChild(inputG);


    }
            previousinput = Number(this.value);
            submitButton.hidden = false;   
        
  }
        }});

    
function calculateGPA() {

    let gpa = Number(currentgpa.value);
  let completedHours =
    Number(currenthours.value) + Number(failedhours.value);

    let totalPoints = gpa * completedHours;

    for (let j = 1; j <= Number(input.value); j++) {

        let courseHours = Number(
            document.getElementById("credithr" + j).value
        );

        let courseGrade = Number(
            document.getElementById("grade" + j).value
        );

        totalPoints += courseHours * courseGrade;
        completedHours += courseHours;
    }

    let newGPA = totalPoints / completedHours;

    if (Number.isNaN(newGPA)) {
        result.textContent = "Enter your credit hours to calculate your GPA.";
    } 
    else {
        result.textContent = "New GPA: " + newGPA.toFixed(2);
    }
}

function Gettargetgpa() {

         if (targetgpa.value === "" || Number(targetgpa.value) === 0) {
        return;
    }



    let totalCourseHours = 0;

    for (let i = 1; i <= Number(input.value); i++) {
        let course = document.getElementById("credithr" + i);

if (course === null || course.value === "" || Number(course.value) === 0) {
    return;
}
        totalCourseHours += Number(
            course.value
        );
    }

let targetValue = Number(targetgpa.value);

let currentTotalHours =
    Number(currenthours.value) + Number(failedhours.value);

let currentPoints =
    Number(currentgpa.value) * currentTotalHours;

let allAplusPoints =
    totalCourseHours * grades[0].value;

let possibleGPA =
    (currentPoints + allAplusPoints) /
    (currentTotalHours + totalCourseHours);



if (possibleGPA < targetValue) {
    targetresult.textContent = "Target GPA is impossible in this term.";
        return;
}

else {
    targetresult.textContent = "";
}


let requiredHours = [];

// Find the lowest grade that can still reach the target
let lastViableIndex = -1;

for (let i = 0; i < grades.length; i++) {

    let gradePoints = totalCourseHours * grades[i].value;

    let possibleGradeGPA =
        (currentPoints + gradePoints) /
        (currentTotalHours + totalCourseHours);

    if (possibleGradeGPA >= targetValue) {
        lastViableIndex = i;
    } 
    else {
        break;
    }
}


// Find how many hours of each viable grade are needed
if (lastViableIndex !== -1) {

    let warningValue = 0;

    if (lastViableIndex < grades.length - 1) {
        warningValue = grades[lastViableIndex + 1].value;
    }

    for (let i = 0; i <= lastViableIndex; i++) {

        let required = 0;

        for (let j = 1; j <= totalCourseHours; j++) {

            let tmpPoints = currentPoints;
            let tmpHours = currentTotalHours;

            tmpPoints += j * grades[i].value;

            if (i < lastViableIndex) {
                tmpPoints +=
                    (totalCourseHours - j) * warningValue;
            }

            tmpHours += totalCourseHours;

            let tmpGPA = tmpPoints / tmpHours;

            if (tmpGPA >= targetValue) {
                required = j;
                break;
            }
        }

        requiredHours[i] = required;
    }
}



let messages = "";

for (let i = 0; i <= lastViableIndex; i++) {
  if (i === 0) {
        messages +=
            "You need around ~" +
            requiredHours[i] +
            " hours of " +
            grades[i].name +
            " to reach your target!<br>";
    }
    else {
        messages +=
            "Or  around ~ " +
            requiredHours[i] +
            " hours of " +
            grades[i].name +
            " to reach your target!<br>";
    }
}

if (lastViableIndex < grades.length - 1) {

    messages +=
        "⚠️ Warning! Getting below " +
        grades[lastViableIndex].name +
        " might make your target harder or impossible!<br>";
}

messages += "Good luck! You can do this!";

targetresult.innerHTML = messages;

   

}