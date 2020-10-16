import React, { useEffect, useState } from 'react'
import {
  fetchGlobalData,
  fetchData,
  fetchCountryData
} from '../../pages/api/country'
import cn from 'classnames'
import Card from '../card'
import useSWR from 'swr'
import LineExample from '../charts/chart-cases'
import LineRecovered from '../charts/chart-recovered'
import LineDeaths from '../charts/chart-deaths'
import CountryPicker from '../country-picker'
import Photo from '../avatar'
import fetcher from '../../lib/fetch'

import style from './style.module.scss'

function Main() {
  const [globalData, setGlobalData] = useState('')
  const [type, setType] = useState('cases')
  const [country, setCountry] = useState('')
  const [dailyData, setDailyData] = useState()

  const { data, error } = useSWR(
    `https://disease.sh/v3/covid-19/countries
    `,
    fetcher
  )

  useEffect(() => {
    const fetchAPI = async (country) => {
      const data = await fetchData(country)
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
  useEffect(() => {
    const fetchAPI = async () => {
      const globalData = await fetchGlobalData()
      setGlobalData(globalData)
    }
    fetchAPI()
  }, [])

  if (data) {
    const allCountries = data?.map((item) => item.country)
    const countriesFlag = data?.map((item) => {
      var obj = {}
      obj.country = item.country
      obj.flag = item.countryInfo.flag
      return obj
    })
    var foundValue = countriesFlag
      .filter((obj) => obj.country === `${country}`)
      .map(({ flag }) => flag)[0]
    console.log(countriesFlag)
  }

  if (!dailyData) {
    console.log(type)
    return <h1>erroadsdasr</h1>
  }
  console.log(dailyData.cases)
  return (
    <main className={style.main}>
      <div className={style.titleContainer}>
        <h2 className={style.title}>Coronavirus COVID-19 {country} Cases</h2>
        {country && <Photo src={foundValue}></Photo>}
      </div>
      <section>
        <Card data={globalData} />
        <div>
          <CountryPicker
            country={country}
            handleCountryChange={handleCountryChange}
          />
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
          {type === 'cases' && country && (
            <LineExample data={dailyData.cases} />
          )}
          {type === 'recovered' && country && (
            <LineRecovered data={dailyData.recovered} country={country} />
          )}
          {type === 'deaths' && country && (
            <LineDeaths data={dailyData.deaths} country={country} />
          )}
        </div>
      </section>
    </main>
  )
}

export default Main
