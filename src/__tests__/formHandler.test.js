import { handleSubmit, saveTrip, removeTrip } from '../client/js/formHandler';

describe('Handle submit tests', () => {
    it('should be defined', () => {
        expect(handleSubmit).toBeDefined();
    });

    it('should be a function', () => {
        expect(typeof handleSubmit).toBe('function');
    });
});

describe('Save trip tests', () => {
    it('should be defined', () => {
        expect(saveTrip).toBeDefined();
    });

    it('should be a function', () => {
        expect(typeof saveTrip).toBe('function');
    });
});

describe('Delete trip tests', () => {
    it('should be defined', () => {
        expect(removeTrip).toBeDefined();
    });

    it('should be a function', () => {
        expect(typeof removeTrip).toBe('function');
    });
});
