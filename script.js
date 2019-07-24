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


// PW1--1

for (let i = 0; i < students.length; i++) {

        console.log(
            "Name: " + students[i].name + "\nGender " + students[i].gender + "\nCity: "+ students[i].address.city + "\nScore: " + students[i].admissionTestScore
            );

}

// PW1--2

for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "f") {
        console.log(students[i].name);

    }
}

// PW1--3

for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "m") {
        console.log(students[i].name);

    }
}

// PW1--4
for (let i = 0; i < students.length; i++) {
        if (students[i].admissionTestScore >= 50) {
            console.log(students[i].name);

        }
    }

// PW1--5

for (let i = 0; i < students.length; i++) {
        if (students[i].address.city == "Karachi" && students[i].hasInternet == true) {
            console.log(students[i].name);

        }
    }

// PW1--6

for (let i = 0; i < students.length; i++) {
            console.log(
                students[i].name+"'s Address:\n"+ students[i].address.ilaqa +" in "+ students[i].address.city +", " + students[i].address.country
                );

    }

// PW1--7

for (let i = 0; i < students.length; i++) {
    if (students[i].phoneNo.charAt(2) == "3") {
        console.log(students[i].name);

    }
}

// PW1--8

for (let i = 0; i < students.length; i++) {
    if (students[i].hasJob == true || students[i].hasSchoolBefore == true) {

        console.log("Group A: "+ students[i].name);

    }
    else{
        console.log("Group B: "+ students[i].name);

    }
}
// Output
// Group A: Amna
// Group A: Hadia
// Group B: Ahmed
// Group B: Fariha
// Group A: Abdullah

// PW1--9

for (let i = 0; i < students.length; i++) {
    let studentsBirthYear = students[i].dob;
    let age =new Date().getFullYear() - new Date(studentsBirthYear).getFullYear();
    
    console.log(students[i].name + "'s Age is " + age + " Years.");

}

// PW--10

let biggestAgeStudentIndex = 0;

for (let i = 0; i < students.length; i++) {
    let age = new Date().getFullYear() - new Date(students[i].dob).getFullYear();
    if (age > biggestAgeStudentIndex) {
        biggestAgeStudentIndex = i;
    }

}
console.log(students[biggestAgeStudentIndex].name);
