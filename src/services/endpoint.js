

import http from './http-common'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

class DataService {
  getWeather(city) {
    return http.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
  }
}

export default new DataService()
