const { checkSeatStatus } = require('../homework')
//test 1
it('checkSeatStatus is a function.', () => {
    expect(typeof checkSeatStatus).toBe('function')  
})
//test 2

it('Should throw a TypeError if the first parameter is not a string', () => {
    expect(() => checkSeatStatus (5)).toThrow(new TypeError('First parameter is not a string'))
})

it('Should throw a TypeError if the second parameter is not a number', () => {
    expect(() => checkSeatStatus ("A", "5")).toThrow(new TypeError('Second parameter is not a number'))
})


