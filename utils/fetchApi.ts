import axios from 'axios';

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': 'accef9fcf1msh3a402dac6657e36p11734bjsn2b20e25af3fb',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });
  return data;
};
