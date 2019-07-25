
let students = [
    {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];


console.log("PW1--1 Print each student in this format:");

for (let i = 0; i < students.length; i++) {
if(students[i].gender === "f"){
    console.log(
        "Name: " + students[i].name + "\nGender: Female " + "\nCity: " + students[i].address.city + "\nScore: " + students[i].admissionTestScore
    );
} else{
    console.log(
        "Name: " + students[i].name + "\nGender: Male " + "\nCity: " + students[i].address.city + "\nScore: " + students[i].admissionTestScore
    );
}
    
}

console.log("PW1--2 Print names of female students only.");

for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "f") {
        console.log(students[i].name);

    }
}

console.log("PW1--3 Print names of male students only.");

for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "m") {
        console.log(students[i].name);

    }
}
console.log("PW1--4 Print names of students who have passed the admission test. Passing marks are 50.");

for (let i = 0; i < students.length; i++) {
    if (students[i].admissionTestScore >= 50) {
        console.log(students[i].name);

    }
}

console.log("PW1--5 Print names of eligible students only (students who have internet and live in Karachi are eligible)");

for (let i = 0; i < students.length; i++) {
    if (students[i].address.city == "Karachi" && students[i].hasInternet == true) {
        console.log(students[i].name);

    }
}

console.log("PW1--6 Print address of each student in this format:");

for (let i = 0; i < students.length; i++) {
    console.log(
        students[i].name + "'s Address:\n" + students[i].address.ilaqa + " in " + students[i].address.city + ", " + students[i].address.country
    );

}

console.log("PW1--7 Print names and phone number of students who have Ufone.");

for (let i = 0; i < students.length; i++) {
    if (students[i].phoneNo.charAt(2) == "3") {
        console.log(students[i].name);

    }
}
console.log("PW1--8 Students who have a job or a class are placed in Group B.\n Print the names of students in Group A, and in Group B, in the below format:");

let groupA = [];
let groupB = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].hasJob == true || students[i].hasSchoolBefore == true) {
        groupA.push(students[i].name);
    }
    else {
        groupB.push(students[i].name);
    }
}
console.log("Group A: " + groupA);
console.log("Group B: " + groupB);

console.log("PW1--9 Print age of each student in the below format:");

for (let i = 0; i < students.length; i++) {
    let studentsBirthYear = students[i].dob;
    let age = new Date().getFullYear() - new Date(studentsBirthYear).getFullYear();

    console.log(students[i].name + "'s Age is " + age + " Years.");

}

console.log("PW--10 Print the name of the oldest student");

// let biggestAgeStudentIndex = 0;

// for (let i = 0; i < students.length; i++) {
//     let age = new Date().getFullYear() - new Date(students[i].dob).getFullYear();
//     if (age > biggestAgeStudentIndex) {
//         biggestAgeStudentIndex = i;
//     }
// }
// console.log(students[biggestAgeStudentIndex].name);


let biggest = 0;
let studentIndex;
for (let i = 0; i < students.length; i++) {
    let age = new Date().getFullYear() - new Date(students[i].dob).getFullYear();
    if (age > biggest) {
        biggest = age;
        studentIndex = i;
    }
}
console.log(students[studentIndex].name);