


import {SMALL_IMG_COVER_BASE_URL } from '../../api'
import { FiveStarRating } from '../stars/stars'
import "./products.css"

export default function Products({ item, sendData }) {
  const rating = item?.vote_average / 2

  const HandleClick = () => {
    sendData(item);
  }

  return (
    <div className='all_products'>
      <div onClick={HandleClick} className='products'>
        <div className='image'>
          <img className='products_image' src={`${SMALL_IMG_COVER_BASE_URL+item.poster_path}`} alt="" />
        </div>
        <div className='description'>
          <span className='title'>{item.title}</span>
        <FiveStarRating rating={rating} />
          <p>{item.release_date}</p>
        </div>
      </div>
    </div>
  )
}



