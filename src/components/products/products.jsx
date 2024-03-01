import React, { useState } from 'react'
import {SMALL_IMG_COVER_BASE_URL } from '../../api'
import "./products.css"
import Desc from '../desc/desc'

// // window.location.href= `/product/${item._id}`;


export default function Products({item}) {


  return (

    <div className='all_products'>

        <div className='products'>

            <div className='image'>
                     <img className='products_image' src={`${SMALL_IMG_COVER_BASE_URL+item.poster_path}`} alt="" />

            </div>

            <div className='description'>
                       <span className='title'>{item.title}</span>
                       <p>{item.release_date}</p>

            </div>

        </div>

    </div>
  )
}






