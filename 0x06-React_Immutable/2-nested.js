import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  // Convert obj to an Immutable obj
  const immutableObj = fromJS(object);

  // Access the value of the key in the array
  return immutableObj.getIn(array, undefined);
}
