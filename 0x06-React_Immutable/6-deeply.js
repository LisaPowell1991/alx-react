import { Map } from 'immutable';

// Function to deeply merge two objects into an Immutable Map
export function mergeDeeplyElements(page1, page2) {
    return Map(page1).mergeDeep(Map(page2));
}