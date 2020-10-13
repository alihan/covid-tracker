import React from 'react';
import style from './style.module.scss';

function Photo({ src }) {
  return <img src={src} className={style.photo}></img>;
}

export default Photo;
