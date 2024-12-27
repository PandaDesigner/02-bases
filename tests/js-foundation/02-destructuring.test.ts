import { characters } from '../../src/js-foundation/02-destructuring';


describe('js-foundation/02-destructuring.test.ts', () => {

    test('characters should contain Flash and Superman', () => {
        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    })
});