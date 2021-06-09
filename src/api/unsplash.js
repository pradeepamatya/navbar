import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
    "Client-ID 3N3GToQl5ghONlC4Cs8h3g0pWmXwpi4iEyIrC344z6k",

  },
});
