import React, { useEffect, useState } from 'react'
import {
  fetchGlobalData,
  fetchData,
  fetchCountryData
} from '../../pages/api/country'
import useSWR from 'swr'
import cn from 'classnames'
import style from './style.module.scss'

import Card from '../card'
import * as Chart from '../charts/index'
import CountryPicker from '../country-picker'
import Photo from '../avatar'
import fetcher from '../../lib/fetch'
import Loading from '../loading'

function HomeMain() {
  const [globalData, setGlobalData] = useState('')
  const [type, setType] = useState('cases')
  const [country, setCountry] = useState('Global')
  const [dailyData, setDailyData] = useState()

  const { data, error } = useSWR(
    `https://disease.sh/v3/covid-19/countries
    `,
    fetcher
  )

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData('Global')
      const globalData = await fetchGlobalData('Global')
      setGlobalData(globalData)
      setDailyData(data)
    }
    fetchAPI()
  }, [])

  const handleCountryChange = async (country) => {
    const countryData = await fetchData(country)
    const countryAllData = await fetchCountryData(country)
    setDailyData(countryData)
    setGlobalData(countryAllData)
    setCountry(country)
  }

  if (data) {
    const countriesFlag = data?.map((item) => {
      var obj = {}
      obj.country = item.country
      obj.flag = item.countryInfo.flag
      return obj
    })
    var foundValue = countriesFlag
      .filter((obj) => obj.country === `${country}`)
      .map(({ flag }) => flag)[0]
  }

  if (!dailyData) {
    return (
      <main className={style.main}>
        <Loading />
      </main>
    )
  }

  return (
    <div className={style.main}>
      <div className={style.titleContainer}>
        <h2 className={style.title}>
          Coronavirus COVID-19
          <span className={style.countryName}> {country}</span> Cases
        </h2>
        {country && <Photo src={foundValue}></Photo>}
      </div>
      <section>
        <CountryPicker
          country={country}
          handleCountryChange={handleCountryChange}
        />
        {globalData && <Card data={globalData} country={country} />}
        <div>
          <div className={style.buttonContainer}>
            <button
              className={cn(style.button, style.cases)}
              onClick={() => setType('cases')}
            >
              Cases
            </button>
            <button
              className={cn(style.button, style.deaths)}
              onClick={() => setType('deaths')}
            >
              Deaths
            </button>
            <button
              className={cn(style.button, style.recovered)}
              onClick={() => setType('recovered')}
            >
              Recovered
            </button>
          </div>
          {type === 'cases' && <Chart.Cases data={dailyData.cases} />}
          {type === 'recovered' && (
            <Chart.Recovered data={dailyData.recovered} country={country} />
          )}
          {type === 'deaths' && (
            <Chart.Deaths data={dailyData.deaths} country={country} />
          )}
        </div>
      </section>
    </div>
  )
}

export default HomeMain
