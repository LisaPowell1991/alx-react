import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
    // Concatenate two lists to an immutable list
    return List(page1).concat(List(page2));
}

export function mergeElements(page1, page2) {
    // Merge 2 objects to an immutable object(Map)
    return Map(page1).merge(Map(page2)).toList();
}