import { parseName } from './utils';

describe('parse name', () => {
    test('parse tank name', () => {
        const name = 'Amélie';
        const correctName = 'Amelie'
        expect(parseName(name)).toBe(correctName);
    });
})
