import axios from 'axios'

export const fakeApi = axios.create({
  baseURL: 'https://fake-api-tau.vercel.app/api/eplay/'
})
