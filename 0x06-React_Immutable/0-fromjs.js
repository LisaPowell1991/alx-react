 import { fromJS } from './node_modules/immutable/dist/immutable';

export default function getImmutableObject(object) {
    // Convert the object to an Immutable object
    return fromJS(object);
}
