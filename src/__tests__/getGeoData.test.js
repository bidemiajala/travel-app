import { getGeoData } from '../client/js/getGeoData';

describe('Get geonamedata tests', () => {
    it('should be defined', () => {
        expect(getGeoData).toBeDefined();
    });

    it('should be a function', () => {
        expect(typeof getGeoData).toBe('function');
    });

    it('should return object as response', () => {
        expect(typeof getGeoData('toronto')).toBe('object');
    });
});
