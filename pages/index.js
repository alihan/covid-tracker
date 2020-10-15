import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import fetcher from '../lib/fetch';
import { fetchData } from './api/country';
import LineExample from '../components/charts/chart-cases';
import CountryPicker from '../components/country-picker';
import LineRecovered from '../components/charts/chart-recovered';
import LineDeaths from '../components/charts/chart-deaths';
import Layout from '../components/layout'



const Profile = () => {
  const [type, setType] = useState('cases');
  const [country, setCountry] = useState('');
  const [dailyData, setDailyData] = useState();

  const { data, error } = useSWR(
    `https://disease.sh/v3/covid-19/countries
    `,
    fetcher
  );

  useEffect(() => {
    const fetchAPI = async (country) => {
      const data = await fetchData(country);
      setDailyData(data);
    };
    fetchAPI();
  }, []);

  const handleCountryChange = async (country) => {
    const countryData = await fetchData(country);
    setDailyData(countryData);
    setCountry(country);
  };

  console.log(dailyData);
  console.log(type);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <Layout>
      <div>
        <CountryPicker
          country={country}
          handleCountryChange={handleCountryChange}
        />
        <div className="button-container">
          <button onClick={() => setType('cases')}>Cases</button>
          <button onClick={() => setType('recovered')}>Recovered</button>
          <button onClick={() => setType('deaths')}>Deaths</button>
        </div>
        {type === 'cases' && country && (
          <LineExample data={dailyData.cases} country={country} />
        )}
        {type === 'recovered' && country && (
          <LineRecovered data={dailyData.recovered} country={country} />
        )}
        {type === 'deaths' && country && (
          <LineDeaths data={dailyData.deaths} country={country} />
        )}
        </div>
    </Layout>
  );
};
export default Profile;
