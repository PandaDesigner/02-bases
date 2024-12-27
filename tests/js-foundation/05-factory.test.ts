import { buildMakePerson } from '../../src/js-foundation/05-factory';
import { getUUID } from '../../src/plugins/get-id.plugin';


describe('js-foundation/05-factory.test.ts', () => {

    const getUUIDMock = () => '1234';
    const getAgeMock = () => 35;

    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({ getUUID: getUUIDMock, getAge: getAgeMock });
        expect(typeof makePerson).toBe('function');
    });

    test('makePerson should return a person', () => {
        const makePerson = buildMakePerson({ getUUID: getUUIDMock, getAge: getAgeMock });
        const person = makePerson({ name: 'John', birthdate: '1985-10-21' });
        expect(person).toEqual({
            id: expect.stringMatching(/^\d+$/),
            name: expect.stringMatching(/^[a-zA-Z\s]+$/),
            birthdate: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
            age: expect.any(Number)
        });
    });
});