

import React, { useEffect, useState } from 'react';
import Products from '../../components/products/products';

import Getdata from '../../helpers/fetch';
import { useNavigate } from 'react-router-dom';
import Not_found from '../../components/not found/not_found';





export default function Home({ searchTerm }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Getdata('/movie/popular').then((result) => {
      const filteredData = result.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setData(filteredData);
    });
  }, [searchTerm]);

  console.log(data.data);

  const handleClickProducts = (productsData) => {
    navigate(`/movie/${productsData.id}`, { state: productsData });
  };

  return (
    <>
      {
       data.length !== 0 ? (
          data.map((item, index) => (

              <Products key={index} item={item} sendData={handleClickProducts}/>
            )
          )
          )
          :
          (
             <Not_found/>
          )

  }

    </>
  );
}
