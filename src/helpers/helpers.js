import { BASE_URL, API_KEY } from '../../api';

import axios from 'axios';



async function Getdata(path) {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${path}?api_key=${API_KEY}`
      );
      console.log(response);
      return (response.data.results);
    } catch (error) {
      console.log('Error', error);
    }
  }

  export default Getdata