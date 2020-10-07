import React, { useState, useEffect } from 'react';
import fetcher from '../lib/fetch';
import { fetchData } from './api/country';
import Country from '../components/country-info.js';
import Chart from '../components/chart';
import CountryPicker from '../components/country-picker';
import Cards from '../components/Cards';

const Profile = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  };
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData();
      setData(data);
    };
    fetchAPI();
  }, []);
  console.log(data);
  return (
    <div>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};
export default Profile;

//   const [name, setName] = useState('');
//   const [country, setCountry] = useState('Italy');
//   const { allData, error2 } = useSWR(
//     `https://disease.sh/v3/covid-19/countries?yesterday=true
//     `,
//     fetcher
//   );
//   console.log(allData);

//   const { data, error } = useSWR(
//     `https://disease.sh/v3/covid-19/countries/${country}?strict=true
//   `,
//     fetcher
//   );

//   function handleCountryChange() {
//     setCountry(name);
//   }
//   function changeCountryChange(e) {
//     setName(e.target.value);
//   }

//   console.log(allData);
//   return (
//     <div>
//       <input value={name} onChange={changeCountryChange} />
//       <button onClick={handleCountryChange}>submit</button>
//       {data && (
//         <>
//           <Chart data={data} />
//           <select
//             className="selectpicker countrypicker"
//             data-flag="true"
//           ></select>
//           <h1>{data.country}</h1>
//           <p>{data.todayCases}</p>
//           <img src={data.countryInfo.flag}></img>
//         </>
//       )}
//     </div>
//   );
// };
