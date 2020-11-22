import React from 'react'
import HomeMain from './home'
import HowToProtectMain from './howtoprotect'

const Main = ({ home, howToProtect }) => {
  return (
    <main>
      {home && <HomeMain />}
      {howToProtect && <HowToProtectMain />}
    </main>
  )
}

export default Main
