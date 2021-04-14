import { renderSavedTrips } from '../client/js/renderSavedTrips';

describe('renderSavedTrips tests', () => {
    it('should be defined', () => {
        expect(renderSavedTrips).toBeDefined();
    });

    it('should be a function', () => {
        expect(typeof renderSavedTrips).toBe('function');
    });
});
