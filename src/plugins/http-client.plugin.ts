import axios from 'axios';

export const httpClientPlughin = {
  get: async (url: string) => {
    const resp = await axios({
      method: 'get',
      url: url
    });
    const pokemon = await resp.data;

    return pokemon;
    /*  const resp = await fetch(url);
    const data = await resp.json();
    return data; */
  },

  post: async (url: string, body: any) => {},
  put: async (url: string, body: any) => {},
  delete: async (url: string) => {}
};
