import exp from 'constants';
import { getAge } from '../../src/plugins/get-age.plugin';

describe('get-age.plugin test src/plugins/get-age.plugin.ts', () => {

    test('test should getAge return typeof numbers', () => {

        const birthdate = '1985-10-21';
        const age = getAge(birthdate);
        expect(typeof age).toBe('number');

    });

    test('test should getAge return 35', () => {

        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculateAge);

    });

    test('test should getAge return 0', () => {

        const spy = jest.spyOn(require('../../src/plugins/get-age.plugin'), 'getAge').mockReturnValue(35);

        const birthdate = '1995-10-21';
        const age = getAge(birthdate);
        expect(spy).toHaveBeenCalledWith(birthdate)
        expect(spy).toHaveBeenCalled();
        expect(age).toBe(35);
    });

});