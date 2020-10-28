import React from 'react'
import HomeMain from './home'
import HowToProtectMain from './howtoprotect'

function Main({ home, howToProtect }) {
  return (
    <main>
      {home && <HomeMain />}
      {howToProtect && <HowToProtectMain />}
    </main>
  )
}

export default Main
