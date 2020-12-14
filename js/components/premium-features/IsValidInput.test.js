import { isValidInput } from './isValidInput.js';

describe('Blogi variantai', () => {
    test('Prigauna neduotus abu parametrus', () => {
        expect(isValidInput()).toEqual(false);
    })

    test('Prigauna neduota antra parametra', () => {
        expect(isValidInput('body')).toEqual(false);
    })
})

describe('Tikranamas antro parametro formatas (sudetis)', () => {
    test('Turi tureti data parametra (object key)', () => {
        expect(isValidInput('body', { data: 541 })).toEqual(false);
        expect(isValidInput('body', { data: 'afds' })).toEqual(false);
        expect(isValidInput('body', { data: {} })).toEqual(false);
        expect(isValidInput('body', { data: true })).toEqual(false);
        expect(isValidInput('body', { data: false })).toEqual(false);
        expect(isValidInput('body', { data: null })).toEqual(false);
        expect(isValidInput('body', { data: [] })).toEqual(true);
    })
})