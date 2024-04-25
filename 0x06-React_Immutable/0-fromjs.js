const { fromJS } = require('immutable');

function getImmutableObject(obj) {
    // Using fromJS to convert the object to an Immutable Map
    return fromJS(obj);
}

export default getImmutableObject;
