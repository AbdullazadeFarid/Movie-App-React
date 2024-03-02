import React, { useEffect, useState } from 'react';
import Products from '../../components/products/products';

import Getdata from '../../helpers/fetch';
import { useNavigate } from 'react-router-dom';


export default function Popularity() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()



  useEffect(() => {
    Getdata('/movie/now_playing').then(setData)
  }, []);

  const handleClickProducts =(productsData)=>{

    navigate (`/movie/${productsData.id}` , { state: productsData })

      }

  return (
    <>
      {data.map((item , index) => (
        <Products key={index} item={item} sendData={handleClickProducts} />

      ))}
    </>
  );
}
