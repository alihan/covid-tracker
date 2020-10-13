import React from 'react'

import style from './style.module.scss'

function Header({ children }) {
  return (
    <header>
      <h1 className={style.title}>Welcome !</h1>
      
    </header>
  )
}

export default Header
