import { List } from 'immutable';

export function getListObject(array) {
    // Convert the array to an Immutable List
    return List(array);
}

export function addElementToList(list, element) {
    // Takes immutable list and adds element to it
    return list.push(element);
}