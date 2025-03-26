// 1.A
let age = parseInt(prompt("Enter your age: ")); // Prompt user for their age and convert it to an integer.
let genAverage = parseInt(prompt("Enter your genAverage: ")); // Prompt user for their general average and convert it to an integer.

// Check if the user meets the requirements for BSCS admission.
let collegeBSCS = (age >= 18 && genAverage >= 83) ? "You may enter College, under BSCS Program" : "Both conditions may have not met and not allowed to enroll";
console.log(collegeBSCS); // Display the result in the console.

// 2.B
let subject = prompt("Enter your Subject: "); // Ask user for their subject.
let grade = parseInt(prompt("Enter your grade: ")); // Ask user for their grade in the subject.

// Determine eligibility based on subject and grade.
let registrar = (subject === "DSA" && grade >= 80) ? "You may enroll Application Development" :
                (subject === "Math101" && grade <= 80) ? "You may enroll Calculus" :
                "You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus";
console.log(registrar); // Print enrollment eligibility.

// 2.A
let age2 = parseInt(prompt("Enter your age: ")); // Request the user's age.
if (age2 >= 18) { // Check if user meets the age requirement for voter registration.
   console.log("You may now Register as a Voter for Elections 2025"); // Eligible voter message.
} else {
   console.log("You are too young to register as a voter for Elections 2025"); // Not eligible voter message.
}

// 2.B
let genAverage2 = parseInt(prompt("Enter your General Average: ")); // Prompt user for general average.
if (genAverage2 >= 85) {
   console.log("You may enroll in all Course Programs"); // Eligible for all courses.
} else if (genAverage2 < 85 && genAverage2 > 82) {
   console.log("You may enroll in any Course Program except in CTE, SCJE, CHS"); // Some restrictions apply.
} else {
   console.log("You may enroll in any Course Program except CTE, SCJE, CHS, CCS"); // More restrictions apply.
}
console.log(genAverage2); // Display general average value.

// 3.A
let fname = "Jose Cruz"; // Define a name string.
let i = 0; // Initialize counter variable.

// Loop until the counter reaches the length of the name.
while (fname.length > i) {
  let c = 2 + i; // Incremental calculation.
  let nLengthCounterTwo = fname.length - c; // Adjusted length calculation.
  console.log(fname); // Output name each iteration.
  console.log("Iterations Name was Printed: " + i); // Output iteration count.
  i++; // Increment counter.
}

// II. User Registration & Login System
let uname = prompt("Register your username: "); // User inputs username.
let pword = parseInt(prompt("Register your passcode")); // User inputs passcode.
let re_pword = parseInt(prompt("Re-enter your passcode")); // User re-enters passcode for confirmation.

if (pword === re_pword) { // Check if passwords match.
   alert("Congratulations You're Registered"); // Confirmation message.
   let loginUname = prompt("Username: "); // Prompt for login username.
   if (loginUname === uname) { // Validate username.
    let loginPword = prompt("Password: "); // Prompt for login password.
    (loginPword === pword) ? alert("Welcome to DSA, " + uname) : alert("Incorrect Password, Re-run the code!");
  } else {
    alert("Incorrect Username, Re-run the code!"); // Invalid username alert.
  }
} else {
  alert("Password does not Match, Re-run the code!"); // Mismatch password alert.
}

// III. Course Enrollment System
let name = prompt("Enter your name:"); // Get the user's name.
let address = prompt("Enter your address:"); // Get the user's address.
let age = parseInt(prompt("Enter your age:")); // Get and convert age input.
let classRole = prompt("Enter your class role (Officer, Student, Teacher):").toLowerCase(); // Convert class role input to lowercase.
let course = prompt("Enter your course (BSCS, BSM, BAEL):").toUpperCase(); // Convert course input to uppercase.

// Validate course selection.
if (course === "BSCS" || course === "BSM" || course === "BAEL") {
  // Validate class role and repeat name based on age.
  if (classRole === "officer" || classRole === "student" || classRole === "teacher") {
    let iterations = Math.floor(age / 4) || 1; // Determine iterations based on age.
    for (let i = 0; i < iterations; i++) {
      console.log(name); // Print name multiple times.
    }
  } else {
    console.log("Invalid class role. Please select Officer, Student, or Teacher."); // Invalid class role warning.
  }
} else {
  console.log("Invalid course. Please select BSCS, BSM, or BAEL."); // Invalid course warning.
}

