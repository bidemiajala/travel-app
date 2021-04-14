import { validateInput } from '../client/js/validateInput';

let element = document.createElement('input');

describe('validate input tests', () => {
    test('should return true if input is entered', () => {
        const validElement = element;
        validElement.value = 'Manchester';
        expect(validateInput([validElement])).toBeTruthy();
    });

    it('should return false if no input is entered', () => {
        const invalidElement = element;
        invalidElement.value = '';
        expect(validateInput([invalidElement])).toBeFalsy();
    });
});
