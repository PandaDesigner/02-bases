const axios = require('axios');

const httpClientPlughin = {
  get: async (url) => {
    const resp = await axios({
      method: 'get',
      url: url
    });
    const pokemon = await resp.data;
    console.log(pokemon);

    return pokemon;
    /*  const resp = await fetch(url);
    const data = await resp.json();
    return data; */
  },

  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {}
};

module.exports = {
  httpClient: httpClientPlughin
};
