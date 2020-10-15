import React from 'react';
import style from './style.module.scss';
import cn from 'classnames';

function Card({data : { cases, deaths, recovered, casesPerOneMillion, deathsPerOneMillion, recoveredPerOneMillion }}) {
  return (
      <div className={style.cardContainer}>
          <div className={style.card}>
          <h2 className={cn(style.title, style.cases)}>{cases}</h2>
          <p>Cases</p>
          </div>
          <div className={style.card}>
          <h2 className={cn(style.title, style.deaths)}>{deaths}</h2>
          <p>Deaths</p>
          </div>
          <div className={style.card}>
          <h2 className={cn(style.title, style.recovered)}>{recovered}</h2>
          <p>Recovered</p>
          </div>
      </div>
  );
}

export default Card;
