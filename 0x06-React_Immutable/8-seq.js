import { Seq } from 'immutable';

function printBestStudents(object) {
    const students = Seq(object)
        .filter(student => student.score >= 70)  // Only keep students with scores >= 70
        .map(student => ({
            score: student.score,
            firstName: capitalize(student.firstName),
            lastName: capitalize(student.lastName),
        }))
        .toObject();  // Convert it back to a plain object

    console.log(JSON.stringify(students, null, 2));  // Pretty print the object
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
