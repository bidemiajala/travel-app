import { getPics } from '../client/js/getPics';

describe('Get pixabay images tests', () => {
    it('should be defined', () => {
        expect(getPics).toBeDefined();
    });

    it('should be a function', () => {
        expect(typeof getPics).toBe('function');
    });

    it('should return object when fired', () => {
        expect(typeof getPics('photo', 'travel', true, 'popular', 'horizontal', 'montreal')).toBe('object');
    });
});
