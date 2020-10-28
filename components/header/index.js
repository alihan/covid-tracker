import React from 'react'
import Link from 'next/link'

import style from './style.module.scss'
import * as Icon from '../icons'

function Header() {
  return (
    <nav className={style.header}>
      <Link href="/">
        <div className={style.titleContainer}>
          <h1 className={style.title}>COVID-19 Tracker</h1>

          <Icon.Covid />
        </div>
      </Link>

      <Link href="/how-to-protect">
        <a className={style.pageHref}>How To Protect</a>
      </Link>
    </nav>
  )
}

export default Header
