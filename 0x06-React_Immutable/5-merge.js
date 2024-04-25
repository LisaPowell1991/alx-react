import { List, Map } from 'immutable';

// Function to concatenate two arrays into an Immutable List
export function concatElements(page1, page2) {
    // Convert arrays to Lists and concatenate them
    return List(page1).concat(List(page2));
}

// Function to merge two objects into an Immutable List of their values, preferring page2's values
export function mergeElements(page1, page2) {
    // Convert objects to Maps, merge them, and then convert the values to a List
    return Map(page1).merge(Map(page2));
}