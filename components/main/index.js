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
import Loading from '../loading'

import style from './style.module.scss'

function Main() {
  const [globalData, setGlobalData] = useState('')
  const [type, setType] = useState('cases')
  const [country, setCountry] = useState('Global')
  const [dailyData, setDailyData] = useState()

  const { data, error } = useSWR(
    `https://disease.sh/v3/covid-19/countries
    `,
    fetcher
  )
  console.log(country)

  useEffect(() => {
    const fetchAPI = async (country) => {
      const data = await fetchData('Global')
      setDailyData(data)
    }
    fetchAPI()
  }, [])

  useEffect(() => {
    const fetchAPI = async () => {
      const globalData = await fetchGlobalData('Global')
      setGlobalData(globalData)
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
  }

  if (!dailyData) {
    return <Loading />
  }

  return (
    <main className={style.main}>
      <div className={style.titleContainer}>
        <h2 className={style.title}>
          Coronavirus COVID-19{' '}
          <span className={style.countryName}>{country}</span> Cases
        </h2>
        {country && <Photo src={foundValue}></Photo>}
      </div>
      <section>
        {globalData && <Card data={globalData} />}
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
          {type === 'cases' && <LineExample data={dailyData.cases} />}
          {type === 'recovered' && (
            <LineRecovered data={dailyData.recovered} country={country} />
          )}
          {type === 'deaths' && (
            <LineDeaths data={dailyData.deaths} country={country} />
          )}
        </div>
      </section>
    </main>
  )
}

export default Main
