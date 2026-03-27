
import axios from "axios"

const http = axios.create({
  baseURL: "https://localhost:5000", 
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

http.interceptors.request.use(config => {
  const token = sessionStorage.getItem("token")
  if (token)
    config.headers.Authorization = `Bearer ${token}`
  return config
})

http.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      sessionStorage.clear()
      window.location.href = "/"
    }
    return Promise.reject(error)
  }
)

export default http