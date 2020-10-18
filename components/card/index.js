import React from 'react'
import style from './style.module.scss'
import cn from 'classnames'
import numberFormat from '../../utils/numberFormat'

function Card({
  data: {
    cases,
    deaths,
    recovered,
    casesPerOneMillion,
    deathsPerOneMillion,
    recoveredPerOneMillion
  }
}) {
  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <h2 className={cn(style.title, style.cases)}>{numberFormat(cases)}</h2>
        <p className={style.description}>Cases</p>
      </div>
      <div className={style.card}>
        <h2 className={cn(style.title, style.deaths)}>
          {numberFormat(deaths)}
        </h2>
        <p className={style.description}>Deaths</p>
      </div>
      <div className={style.card}>
        <h2 className={cn(style.title, style.recovered)}>
          {numberFormat(recovered)}
        </h2>
        <p className={style.description}>Recovered</p>
      </div>
    </div>
  )
}

export default Card
