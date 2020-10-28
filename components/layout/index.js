import React from 'react'

import style from './style.module.scss'

import Header from '../header'
import Main from '../main'
import Footer from '../footer'

function Layout({ home, howToProtect, children }) {
  return (
    <div className={style.layout}>
      <Header />
      <Main home={home} howToProtect={howToProtect}>
        {children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout
