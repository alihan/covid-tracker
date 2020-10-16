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
  
  return (
    <Layout />
  );
};
export default Profile;
