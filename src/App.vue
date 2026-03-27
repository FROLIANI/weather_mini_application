<script setup>
import { ref } from 'vue'
import { useWeatherStore } from '@/stores/weather'

const location = ref('')
const store = useWeatherStore()

const getWeather = () => {
  if (!location.value) return
  store.fetchWeather(location.value)
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card p-4 shadow">
          <h3 class="mb-3">Weather App</h3>

          <!-- Search -->
          <div class="input-group mb-3">
            <input
              v-model="location"
              @keyup.enter="getWeather"
              type="text"
              class="form-control"
              placeholder="Enter city (e.g. Dodoma)"
            />
            <button class="btn btn-primary" @click="getWeather">Search</button>
          </div>

          <!-- Loading Spinner -->
          <div v-if="store.loading" class="text-center mt-3">
            <div class="spinner-border"></div>
          </div>

          <!-- Error Message -->
          <div v-else-if="store.message" class="alert alert-danger mt-3">
            {{ store.message }}
          </div>

          <!-- Weather Info -->
          <div v-else-if="store.weather" class="mt-4">
            <div class="card p-3 bg-light">
              <h4 class="mb-2">
                {{ store.weather.location.name }}, {{ store.weather.location.country }}
              </h4>
              <p class="mb-1">🕒 Local Time: {{ store.weather.location.localtime }}</p>
              <ul class="list-group">
                <li class="list-group-item">
                  🌡 Temperature: {{ store.weather.current.temp_c }} °C
                </li>
                <li class="list-group-item">💧 Humidity: {{ store.weather.current.humidity }} %</li>
                <li class="list-group-item">
                  🌬 Wind: {{ store.weather.current.wind_kph }} kph ({{
                    store.weather.current.wind_dir
                  }})
                </li>
                <li class="list-group-item">
                  ☁ Condition: {{ store.weather.current.condition.text }}
                  <img :src="'https:' + store.weather.current.condition.icon" alt="icon" />
                </li>
              </ul>
            </div>
          </div>

          <!-- Empty state -->
          <div v-else class="text-muted mt-3">Enter a city and click search to see weather.</div>
        </div>
      </div>
    </div>
  </div>
</template>