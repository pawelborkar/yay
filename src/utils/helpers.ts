import axios from 'axios';

const URL = import.meta.env.VITE_APP_API_URL;

export const getShortenURL = async (url: string) => {
  try {
    const response = await axios.post(`${URL}/url`, {
      target_url: url
    })
    if (response.status === 200) {
      return response.data
    } else {
      console.error(response.statusText)
    }
  } catch (error) {
    console.error(error)
  }
}

