import { Seq } from 'immutable';

// Function to print students with scores >= 70
export default function printBestStudents(object) {
    const students = Seq(object)
        .filter(student => student.score >= 70)
        .map(student => ({
            score: student.score,
            firstName: capitalize(student.firstName),
            lastName: capitalize(student.lastName),
        }))
        .toObject();
    console.log(JSON.stringify(students, null, 2));
}

// Function to capitalize the first letter of a string
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}