import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import fetcher from '../lib/fetch';

import { NativeSelect, FormControl } from '@material-ui/core';
import Photo from './avatar';
import { fetchCountries } from '../pages/api/country';

const CountryPicker = ({ country, handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const { data, error } = useSWR(
    `https://disease.sh/v3/covid-19/countries
    `,
    fetcher
  );

  const allCountries = data.map((item) => item.country);
  const countriesFlag = data.map((item) => {
    var obj = {};
    obj.country = item.country;
    obj.flag = item.countryInfo.flag;
    // obj[item.country] = item.countryInfo.flag;
    return obj;
  });
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  var foundValue = countriesFlag
    .filter((obj) => obj.country === `${country}`)
    .map(({ flag }) => flag)[0];

  return (
    <>
      <form>
        {country && <Photo src={foundValue}></Photo>}
        <select
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {allCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default CountryPicker;
