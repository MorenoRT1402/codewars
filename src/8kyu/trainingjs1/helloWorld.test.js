const { describe } = require('node:test');
const helloWorld = require('./helloWorld');

describe('Training JS #1: create your first JS function and print "Hello World!"', () => {
    it('Solution', () => {
        expect(helloWorld()).toBe();
    })
})