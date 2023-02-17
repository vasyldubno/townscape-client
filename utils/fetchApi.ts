import axios from 'axios'

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  })
  return data
}
