const title = 'COVID-19 Tracker'
const description =
  'Display the COVID-19 charts for the last 15 days of every country'

const SEO = {
  title,
  description,
  canonical: '',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'http://covid-tracker-black.vercel.app/',
    title,
    description,
    images: [
      {
        alt: title,
        width: 1200,
        height: 700
      }
    ]
  }
}

export default SEO
