import '@testing-library/jest-dom'
// import generateWeather from '../src'

// import generateWeather from '../src/index'

// test('wind between 0 and 10 inclusive', () => {
//     expect(index.generateWeather).toBeGreaterThanOrEqual(0)
//     expect(randomWind).toBeLessThanOrEqual(10)
// })

// test('temp between -20 and 30 inclusive', () => {
//     expect(randomTemp).toBeGreaterThanOrEqual(-20)
//     expect(randomWind).toBeLessThanOrEqual(30)
// })

test('sanity check', () => {
    expect(true).toBe(true)
})

test('test that three is less than 300', () => {
    expect(3).toBeLessThan(300)
})

// // @jest-environment jsdom
//  test('use jsdom in this test file', () => {
//     const element = document.createElement('#container');
//     expect(element).not.toBeNull();
//   });

// test('Check that ', () => {
//     const wind = document.querySelector('#wind')
//     document.body.innerHTML =
//     wind.innerHTML = `${randomWind} km/h`

//     require('../src/index.js')

//     // `
//     //   <input id="newTodoInput" />
//     //   <button id="addTodoBtn">Add todo</button>
//     //   <ol id="todoList"></ol>
//     // `;
//   });

// test('km/h is present', () => {
//     expect(generateWeather()).toContain('km/h')
// })