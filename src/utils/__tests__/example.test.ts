import exampleMiddleware from '../example';

describe('Example sum middleware', () => {
    it('should given a and b argument return the sum of both', () => {
        expect(exampleMiddleware(4, 6)).toBe(10);
    });
});
