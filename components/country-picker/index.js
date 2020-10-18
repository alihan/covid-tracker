import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import style from './style.module.scss'
import fetcher from '../../lib/fetch'

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([])
  const { data, error } = useSWR(
    `https://disease.sh/v3/covid-19/countries
    `,
    fetcher
  )

  const allCountries = data.map((item) => item.country)

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(allCountries)
    }
    fetchAPI()
  }, [])

  return (
    <form className={style.formContainer}>
      <select
        defaultValue="Global"
        onChange={(e) => handleCountryChange(e.target.value)}
        className={style.select}
      >
        <option value="Global">Global</option>
        {allCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
    </form>
  )
}

export default CountryPicker
