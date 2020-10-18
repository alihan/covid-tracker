import React from 'react'

import style from './style.module.scss'

function Header({ children }) {
  return (
    <nav className={style.header}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>COVID-19 Tracker</h1>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/2860/2860597.svg"
          alt="covid"
          className={style.icon}
        />
      </div>
    </nav>
  )
}

export default Header
