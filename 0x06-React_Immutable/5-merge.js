import { List, Map } from 'immutable';

// Function to concatenate two arrays into an Immutable List
export function concatElements(page1, page2) {
    return List(page1).concat(List(page2));
}

// Function to merge two objects into an Immutable List of their values
export function mergeElements(page1, page2) {
    return Map(page1).merge(Map(page2));
}