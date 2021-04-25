import axios from 'axios';

axios.defaults.baseURL = process.env.BACK_URL;

export const getData = () => async () => {
  const response = await axios.get('/data');
  const result = await response.data;
  return result;
};

export default {
  getData,
};
