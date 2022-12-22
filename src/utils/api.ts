import { API_URL } from './constants'
import axios from 'axios'

export const BlowfishApi: any = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const setApiKey = async (blowfishApiKey: string) => {
  try {
    if (blowfishApiKey !== null) {
      BlowfishApi.defaults.headers.common['X-API-KEY'] = blowfishApiKey
    }
  } catch {
    throw new Error('Error setting API key')
  }
}
