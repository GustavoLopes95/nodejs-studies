const { it, expect } = require('@jest/globals');
const Phromise = require('../phromise');

describe('Promise', () => {
    it('Should create a new promise with pending state', () => {
        const promise  = new Phromise(() => null);
        expect(promise.state).toBe('pending');
        expect(promise.value).toBe(undefined);
    });

    describe('When FulFilled', () => {
        it('Should then a Promise', done => {
            return new Phromise(resolve => resolve({data: 'fake'}))
                .then(response => {
                    expect(response.data).toBe('fake');
                    done();
                });
        });

        it('Should call then just when the async code is resolved', done => {
            return new Phromise((resolve) => setTimeout(resolve({data: 'fake'}), 10))
                .then(response => {
                    expect(response.data).toBe('fake');
                    done();
                });
        });
    });
});