import { fromJS } from 'immutable';

function getImmutableObject(object) {
    // Convert the object to an Immutable object
    return fromJS(object);
}

/* // Test the function
const testObject = { a: 1, b: 2, c: 3 };
const immutableObject = getImmutableObject(testObject);
console.log(immutableObject); */