import React, { useEffect, useState } from 'react';
import Products from '../../components/products/products';
import { BASE_URL, API_KEY } from '../../api';
import axios from 'axios';


export default function Popularity() {
  const [data, setData] = useState([]);

  async function Getdata(path) {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${path}?api_key=${API_KEY}`
      );
      console.log(response);
      setData(response.data.results);
    } catch (error) {
      console.log('Error', error);
    }
  }

  useEffect(() => {
    Getdata('now_playing');
  }, []);

  return (
    <>
      {data.map((item , index) => (
        <Products key={index} item={item} />

      ))}
    </>
  );
}
