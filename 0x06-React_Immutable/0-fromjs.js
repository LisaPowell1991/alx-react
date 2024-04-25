import { fromJS } from 'Immutable';

export default function getImmutableObject(object) {
    // Convert the object to an Immutable object
    return fromJS(object);
}
