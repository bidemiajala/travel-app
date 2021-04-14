import { daysCountdown } from '../client/js/daysCountdown';

describe('Days countdown tests', () => {
    it('should be defined', () => {
        expect(daysCountdown).toBeDefined();
    });

    it('should be a function', () => {
        expect(typeof daysCountdown).toBe('function');
    });

    it('should return number when countdown is calculated', () => {
        const futureDate = '2021-04-16';
        expect(typeof daysCountdown(futureDate)).toBe('number');
    });
});
