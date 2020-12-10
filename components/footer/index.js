import React from 'react'
import style from './style.module.scss'
import * as Icon from '../icons'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <p className={style.description}>
          This page is built with
          <a href="https://github.com/alihan/covid-tracker" target="_blank">
            <span> Next.js</span>
          </a>
        </p>
        <a href="https://github.com/alihan/covid-tracker" target="_blank">
          <Icon.Github />
        </a>
      </div>
    </footer>
  )
}

export default Footer
