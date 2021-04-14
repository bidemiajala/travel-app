import { renderTripCard } from '../client/js/renderTripCard';

const response = {
destinationImage: 'image',
destination: 'Montreal',
daysToGo: '5',
weatherData: [{
    weather: {
        icon: '222'
    }
}],
savedTripId: '11',
save: true
}
describe('renderTripCard tests', () => {
    it('should be defined', () => {
        expect(renderTripCard).toBeDefined();
    });

    it('should be a function', () => {
        expect(typeof renderTripCard).toBe('function');
    });

    it('should render successfully', () => {
        expect(renderTripCard(response.destinationImage, response.destinationImage, response.daysToGo, response.weatherData, response.savedTripId, response.save)).toBeTruthy();
    });
});
