import exp from 'constants';
import { getUserById } from '../../src/js-foundation/03-callbacks';


describe('js-foundation/03-callbacks.test.ts', () => {

    test('getUserById should return an error if user douse not exist', (done) => {
        const id = 3;

        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            done();
        })

    });

    test('getUserById should return user John Doe', (done) => {
        const id = 1;

        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(typeof user).toBe('object');
            expect(user).toEqual(expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String)
            }));
            done();
        })

    })
});