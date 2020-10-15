import React, { useEffect, useState } from 'react'
import { fetchGlobalData } from '../../pages/api/country';
import Card from '../card'

import style from './style.module.scss'

function Main({ children }) {
  const [data, setData] = useState('');

  useEffect(() => {
  const fetchAPI = async() => {
    const data = await fetchGlobalData();
    setData(data);
  };
  fetchAPI();
  }, []);

  return (
    <main className={style.main}>
      <h2 className={style.title}>Coronavirus COVID-19 Global Cases</h2>
      <section>
        <Card data={data} />
      </section>
    </main>
  )
}

export default Main
