import React from 'react'
import style from './style.module.scss'
import numberFormat from '../../utils/numberFormat'
import CardItem from '../card-item'

const Card = ({ data: { cases, deaths, recovered, population }, country }) => {
  const casePercantage = ((cases * 100) / population).toFixed(2)
  const deathPercantage = ((deaths * 100) / cases).toFixed(2)
  const recoveredPercantage = ((recovered * 100) / cases).toFixed(2)

  return (
    <div className={style.cardContainer}>
      <CardItem
        title={numberFormat(cases)}
        description={'Cases'}
        info={'The ratio of the number of cases to the population of'}
        country={country}
        percantage={casePercantage}
      />
      <CardItem
        title={numberFormat(deaths)}
        description={'Deaths'}
        info={'The ratio of the number of deaths to the number of cases in'}
        country={country}
        percantage={deathPercantage}
      />
      <CardItem
        title={numberFormat(recovered)}
        description={'Recovered'}
        info={'The ratio of the number of recoveries to the number of cases in'}
        country={country}
        percantage={recoveredPercantage}
      />
    </div>
  )
}

export default Card
