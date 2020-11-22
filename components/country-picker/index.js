import React from 'react'
import useSWR from 'swr'
import style from './style.module.scss'
import fetcher from '../../lib/fetch'

const CountryPicker = ({ handleCountryChange }) => {
  const { data } = useSWR(
    `https://disease.sh/v3/covid-19/countries
    `,
    fetcher
  )

  const allCountries = data?.map((item) => item.country)

  return (
    <form className={style.formContainer}>
      <select
        defaultValue="Global"
        onChange={(e) => handleCountryChange(e.target.value)}
        className={style.select}
      >
        <option value="Global">Global</option>
        {allCountries?.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
    </form>
  )
}

export default CountryPicker
