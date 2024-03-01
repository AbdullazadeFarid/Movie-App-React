import React, { useEffect, useState } from 'react';
import Products from '../../components/products/products';

import Getdata from '../../helpers/fetch';


export default function Popularity() {
  const [data, setData] = useState([]);



  useEffect(() => {
    Getdata('/movie/now_playing') .then(setData)
  }, []);

  return (
    <>
      {data.map((item , index) => (
        <Products key={index} item={item} />

      ))}
    </>
  );
}
