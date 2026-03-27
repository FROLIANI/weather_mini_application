import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Dataservice from '../services/endpoint.js'

export const useWeatherStore = defineStore('weather', () => {

  // STATE
  const loading = ref(false)
  const weather = ref(null)
  const message = ref(null)

  // GETTERS
  const isLoading = computed(() => loading.value)
  const hasWeather = computed(() => !!weather.value)


  // ACTIONS
  const fetchWeather = async (city) => {
    if (!city) return
    loading.value = true
    message.value = null
    weather.value = null

    try {
      const res = await Dataservice.getWeather(city)

     
      if (res.data?.current) {
        weather.value = res.data
      } else {
        message.value = 'Weather data not found'
      }
    } catch (e) {
      message.value = 'Location not found'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    isLoading,
    weather,
    message,
    hasWeather,
    fetchWeather,
  }
})