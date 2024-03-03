


import {SMALL_IMG_COVER_BASE_URL } from '../../api'
import { FiveStarRating } from '../stars/stars'
import "./products.css"

export default function Products({ item, sendData }) {
  // Генерируем случайное значение рейтинга (это может быть ваша логика)
  const rating = Math.random() * 5;

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
          <p>{item.release_date}</p>
        <FiveStarRating rating={rating} />
        </div>
      </div>
    </div>
  )
}



