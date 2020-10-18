import React from 'react'
import style from './style.module.scss'

function Photo({
  src = 'https://www.flaticon.com/svg/static/icons/svg/2750/2750765.svg'
}) {
  return <img src={src} className={style.photo}></img>
}

export default Photo
