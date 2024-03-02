import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { SMALL_IMG_COVER_BASE_URL } from '../../api';
import "./movieInfo.css"

export default function Movie_Info() {

  const [data, setData] = useState([]);

  const location = useLocation();

  const{state}=location

  useEffect(()=>{
    setData(state)

  },[state])


  return (
    <div
    style={{
      backgroundImage : `url(${SMALL_IMG_COVER_BASE_URL}${data.backdrop_path})`}}
    className='movie_info'>

      <div className='movie_info_products'>

          <div className='info_img'>
               <img src={`${SMALL_IMG_COVER_BASE_URL+data.poster_path}`} alt="" />
           </div>
        <div className='info_title'>
               <h1 className='title'>{data.title}</h1>
        <h3>{data.release_date}</h3>
        <span className='title'>{data.overview}</span>


            </div>
      </div>



    </div>
  )
}
