
  import React, { useEffect, useState } from 'react';
  import Products from '../../components/products/products';

  import Getdata from '../../helpers/fetch';
  import { useNavigate } from 'react-router-dom';


  export default function Popularity({ searchTerm }) {
    const [data, setData] = useState([]);
    const navigate = useNavigate()



    useEffect(() => {
      Getdata('/movie/now_playing').then((result) => {
        const filteredData = result.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setData(filteredData);
      });
    }, [searchTerm]);

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
