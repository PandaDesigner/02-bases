import axios from 'axios';

export const httpClientPlughin = {
  get: async (url: string) => {
    const resp = await axios({
      method: 'get',
      url: url
    });
    const data = await resp.data;

    return data;
    /*  const resp = await fetch(url);
    const data = await resp.json();
    return data; */
  },

  post: async (url: string, body: any) => {
    throw new Error('Not implemented');
  },
  put: async (url: string, body: any) => {
    throw new Error('Not implemented');
  },
  delete: async (url: string) => {
    throw new Error('Not implemented');
  }
};
