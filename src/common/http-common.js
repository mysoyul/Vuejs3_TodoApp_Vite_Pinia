import axios from 'axios'

const APIURL = import.meta.env.VITE_APIURL

const apiClient = axios.create({
  baseURL: APIURL, //"http://localhost:4500/api",
  headers: {
    'Content-type': 'application/json'
  }
})

export default apiClient
