
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
        console.log("Number: "+students[i].phoneNo);

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
console.log("Group A: " + groupA.join(', '));
console.log("Group B: " + groupB.join(', '));

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
let videos = [
    {
        title: "Photoshop tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3
    },
    {
        title: "Episode # 01 - The Best Comedy Show",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    }, {
        title: "Guess The Number game - 23rd July Tech Karo [Urdu]",
        lengthInMinutes: 55,
        category: "Education",
        uploadDate: new Date("05-07-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD", "Creative Commons"],
        viewCount: 14,
        rating: 4.5
    },
    {
        title: "#1 Functions (Javascript) - Web Development - Tech Karo [Urdu]",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    {
        title: "How to Publish React / React Native Library [Urdu/Hindi]",
        lengthInMinutes: 53,
        category: "Science",
        uploadDate: new Date("05-10-2011"),
        tags: "react library, react native library, npm package, npm library, npx package, npx library",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 5.5
    },
    {
        title: "VS Code - Backup or Sync Your Settings, Extensions and Theme [URDU/HINDI]",
        lengthInMinutes: 46,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 4557,
        rating: 2.5
    },
    {
        title: "Sync VSCode extension | Share everything from one pc to other.",
        lengthInMinutes: 56,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 3.5
    },
    {
        title: "Using Git with VS Code and Github",
        lengthInMinutes: 60,
        category: "Education",
        uploadDate: new Date("11-10-1998"),
        tags: "vsCode, git, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 3.1
    },
    {
        title: "VS Code Can Do That?! VS Code Tips and Tricks",
        lengthInMinutes: 48,
        category: "Education",
        uploadDate: new Date("11-10-2019"),
        tags: "VS Code, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    {
        title: "C++Now 2018: Rong Lu “C++ Development with Visual Studio Code”",
        lengthInMinutes: 22,
        category: "Web Development",
        uploadDate: new Date("11-10-2004"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 2.4
    },
    {
        title: "REST API concepts and examples",
        lengthInMinutes: 44,
        category: "Computer Sciences",
        uploadDate: new Date("11-10-2005"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 1008,
        rating: 1.5
    },
    {
        title: "Best laptops for programming? How to get a job at Google? - And other FAQ’s!",
        lengthInMinutes: 25,
        category: "Education",
        uploadDate: new Date("11-10-1999"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 8854,
        rating: 2.2
    },

];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

console.log("PW2--1 Print each video in this format:");
for (let i = 0; i < videos.length; i++) {
    let fullDate = videos[i].uploadDate;

    console.log("Title: " +
        videos[i].title +
        "\nLength: " +
        videos[i].lengthInMinutes +
        " minutes\nCategory: " +
        videos[i].category +
        "\nViews: " +
        videos[i].viewCount.toLocaleString() +
        "\n"+
        fullDate.getDate() +
        "-" + months[fullDate.getMonth()] +
        "-" + fullDate.getFullYear() +
        "\nRating: " +
        videos[i].rating
    );

}
console.log("PW2--2 Print titles of all short ( less than 3 minutes ) videos.");

for (let i = 0; i < videos.length; i++) {
    

}
