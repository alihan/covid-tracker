import axios from 'axios'

const url = 'https://disease.sh/v3/covid-19/'

export const fetchData = async (country) => {
  let changeableUrl = url

  if (country) {
    if (country === 'Global') {
      changeableUrl = `${url}historical/all?lastdays=15`
      try {
        const {
          data: { cases, deaths, recovered }
        } = await axios.get(changeableUrl)

        return { cases, deaths, recovered }
      } catch (error) {
        return error
      }
    } else {
      changeableUrl = `${url}historical/${country}?lastdays=15
    `
      try {
        const {
          data: {
            timeline: { cases, deaths, recovered }
          }
        } = await axios.get(changeableUrl)

        return { cases, deaths, recovered }
      } catch (error) {
        return error
      }
    }
  }
}

export const fetchGlobalData = async () => {
  try {
    const {
      data: { cases, deaths, recovered, population }
    } = await axios.get(`${url}all`)

    return {
      cases,
      deaths,
      recovered,
      population
    }
  } catch (error) {
    return error
  }
}

export const fetchCountryData = async (country) => {
  let changeableUrl = url

  if (country) {
    if (country === 'Global') {
      changeableUrl = `${url}all?yesterday=true
      `
    } else
      changeableUrl = `${url}countries/${country}?strict=true
      `
  }

  try {
    const {
      data: { cases, deaths, recovered, population }
    } = await axios.get(changeableUrl)

    return {
      cases,
      deaths,
      recovered,
      population
    }
  } catch (error) {
    return error
  }
}
