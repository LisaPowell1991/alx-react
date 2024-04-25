import { Seq } from 'immutable';

// Function to print students with a score >= 70 and capitalize their names
export function printBestStudents(grades) {
    // Create a sequence from the grades object
    Seq(grades)
        // Filter out students with a score less than 70
        .filter(student => student.score >= 70)
        // Capitalize the first letter of the first name and the last name
        .map(student => ({
            ...student,
            firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
            lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
        }))
        // Print the result to the console
        .forEach(student => console.log(student));
}