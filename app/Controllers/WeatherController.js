import { weatherService } from "../Services/WeatherService.js";
import { ProxyState } from "../AppState.js"


function _drawF() {
    const weather = ProxyState.weather
    let c = Math.round(weather.temp - 273.15)
    let cFeel = Math.round(weather.feels_like - 273.15)
    let f = Math.round((c * 1.8) + 32)
    let feel = Math.round((cFeel * 1.8) + 32)
    let template =
        `<h6>Outside temp:</h6><h3>${f}°F</h3>
        <p>Feels like: ${feel}°F</p>`
    document.getElementById('weather').innerHTML = template

}

export class WeatherController {
    constructor() {
        this.getWeather()
        ProxyState.on('weather', _drawF)

    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error("[Weather Error]", error)
        }
    }

    _drawC() {
        console.log('draw c')
        const weather = ProxyState.weather
        let c = Math.round(weather.temp - 273.15)
        let cFeel = Math.round(weather.feels_like - 273.15)
        let template =
            `<h6>Outside temp:</h6><h3>${c}℃</h3>
        <p>Feels like: ${cFeel}℃</p>`
        document.getElementById('weather').innerHTML = template
    }

    _drawF() {
        const weather = ProxyState.weather
        let c = Math.round(weather.temp - 273.15)
        let cFeel = Math.round(weather.feels_like - 273.15)
        let f = Math.round((c * 1.8) + 32)
        let feel = Math.round((cFeel * 1.8) + 32)
        let template =
            `<h6>Outside temp:</h6><h3>${f}°F</h3>
        <p>Feels like: ${feel}°F</p>`
        document.getElementById('weather').innerHTML = template

    }
}