const { fromJS } = require('immutable');

function getImmutableObject(object) {
    // Convert the object to an Immutable object
    return fromJS(object);
}

module.exports = getImmutableObject;
