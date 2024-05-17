import { normalize, schema } from "normalizr";

// Define the schema for a course
export const course = new schema.Entity('courses');

// Function to normalize courses data
export function coursesNormalizer(data) {
    return normalize(data, [course]);
}