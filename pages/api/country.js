import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=15
    `;
  }
  try {
    const {
      data: {
        timeline: { cases, deaths, recovered },
      },
    } = await axios.get(changeableUrl);

    return { cases, deaths, recovered };
  } catch (error) {
    return error;
  }
};

export const fetchGlobalData = async () => {
  try {
    const { data : {
      cases, deaths, recovered, casesPerOneMillion, deathsPerOneMillion, recoveredPerOneMillion
    } } = await axios.get(
      'https://disease.sh/v3/covid-19/all'
    );

    return {cases, deaths, recovered, casesPerOneMillion, deathsPerOneMillion, recoveredPerOneMillion};
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
