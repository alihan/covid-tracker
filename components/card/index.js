import React from 'react'
import cn from 'classnames'
import style from './style.module.scss'
import numberFormat from '../../utils/numberFormat'

function Card({ data: { cases, deaths, recovered, population }, country }) {
  const casePercantage = ((cases * 100) / population).toFixed(2)
  const deathPercantage = ((deaths * 100) / cases).toFixed(2)
  const recoveredPercantage = ((recovered * 100) / cases).toFixed(2)

  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <h2 className={cn(style.title, style.cases)}>{numberFormat(cases)}</h2>
        <p className={style.description}>Cases</p>
        <h2 className={style.info}>
          The ratio of the number of cases to the population of
          <span className={style.country}> {country}</span> is
          <span className={style.highlight}> %{casePercantage}</span>
        </h2>
      </div>
      <div className={style.card}>
        <h2 className={cn(style.title, style.deaths)}>
          {numberFormat(deaths)}
        </h2>
        <p className={style.description}>Deaths</p>
        <h2 className={style.info}>
          The ratio of the number of deaths to the number of cases
          <span className={style.highlight}> %{deathPercantage}</span>
        </h2>
      </div>
      <div className={style.card}>
        <h2 className={cn(style.title, style.recovered)}>
          {numberFormat(recovered)}
        </h2>
        <p className={style.description}>Recovered</p>
        <h2 className={style.info}>
          The ratio of the number of deaths to the number of cases %
          <span className={style.highlight}> {recoveredPercantage}</span>
        </h2>
      </div>
    </div>
  )
}

export default Card
