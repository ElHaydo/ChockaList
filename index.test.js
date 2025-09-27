/**
 * @jest-environment jsdom
*/
// Patches the issue of Jest throwing an error when encountering DOM objects.

//Import to test.
import {Main} from './index.mjs';

const mockData = {};

test('Who tests the tester?', () => {
    const somebody = "I DO!";
    expect(somebody ? true : false).toEqual(true);
});