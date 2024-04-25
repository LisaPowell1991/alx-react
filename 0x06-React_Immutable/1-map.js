import { Map } from 'immutable';

export default function getImmutableObject(object) {
    // convert the object to an Immutable object
    return Map(object);
}