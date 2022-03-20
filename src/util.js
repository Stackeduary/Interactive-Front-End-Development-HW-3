export const weatherIcons = ['☀️', '⛅', '☁️', '🌩️', '🌧️', '🌦️', '🌨️']

export function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}

export function convertToFahrenheit(tempC) {
    return (1.8*tempC + 32).toFixed(1)
}