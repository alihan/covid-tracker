import React from 'react'
import cn from 'classnames'
import style from './style.module.scss'

const CardItem = ({ description, country, percantage, info, title }) => {
  return (
    <div className={style.card}>
      <h2
        className={cn(
          style.title,
          description == 'Cases' && style.cases,
          description == 'Recovered' && style.recovered,
          description == 'Deaths' && style.deaths
        )}
      >
        {title}
      </h2>
      <p className={style.description}>{description}</p>
      <h2 className={style.info}>
        {info}
        <span className={style.country}> {country}</span> is
        <span className={style.highlight}> %{percantage}</span>
      </h2>
    </div>
  )
}

export default CardItem
