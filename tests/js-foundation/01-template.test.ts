import { emailTemplate } from '../../src/js-foundation/01-template';


describe('js-foundation/01-template.test.ts', () => {

    test('emailTemplate should contain a greeting', () => {

        expect(emailTemplate).toContain('Hi, ');
    });

    test('emailTemplate should contain {{name}} and {{status}}', () => {

        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{status}}/);
    });
});