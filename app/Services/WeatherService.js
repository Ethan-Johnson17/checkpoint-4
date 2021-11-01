import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";



class WeatherService {

    async getWeather() {
        const res = await sandboxApi.get('weather/')
        console.log(res.data)
        ProxyState.weather = res.data.main
        console.log(ProxyState.weather)
    }
}

export const weatherService = new WeatherService()