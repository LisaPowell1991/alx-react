import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('utils.js', () => {
    test('getFullYear returns the current year', () => {
        const year = new Date().getFullYear();
        expect(getFullYear()).toBe(year);
    });

    test('getFooterCopy returns the correct string when the argument is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    test("getFooterCopy returns the correct string when the argument is false", () => {
        expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
    });

    test('getLatestNotification returns the correct string', () => {
        expect(getLatestNotification()).toStrictEqual({ __html: '<strong>Urgent requirement</strong> - complete by EOD' });
    });
});