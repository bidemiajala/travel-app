import { getWeather } from '../client/js/getWeather';

describe('Get weatherbit data tests', () => {
    it('should be defined', () => {
        expect(getWeather).toBeDefined();
    });

    it('should be a function', () => {
        expect(typeof getWeather).toBe('function');
    });

    it('should return object when fired', () => {
        const lat = 45.50884;
        const lon = -73.58781;
        expect(typeof getWeather('hourly', lat, lon)).toBe('object');
    });
});
