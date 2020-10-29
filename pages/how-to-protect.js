import React from 'react'
import { NextSeo } from 'next-seo'

import Layout from '../components/layout'

const url = 'http://covid-tracker-black.vercel.app/how-to-protect'
const title = 'How to Protect Yourself & Others'
const description = 'See how can you protect from COVID-19'

const HowToProtect = () => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Layout howToProtect />
    </>
  )
}
export default HowToProtect
