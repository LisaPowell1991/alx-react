import { Map } from 'Immutable';

export default function getImmutableObject(object) {
    // convert the object to an Immutable object
    return Map(object);
}