import React from 'react'

import style from './style.module.scss'

function Main({ children }) {
  return (
    <main>
      <h2 className={style.title}>this is h2</h2>
      <section>{children}</section>
    </main>
  )
}

export default Main
