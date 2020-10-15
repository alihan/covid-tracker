import React from 'react'

import style from './style.module.scss'

import Header from '../header'
import Main from '../main'

function Layout({ children }) {
  return (
    <div className={style.layout}>
      <Header/>
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
