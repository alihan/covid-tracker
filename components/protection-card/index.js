import React from 'react'
import style from './style.module.scss'

function ProtectionCard({ icon, description, title }) {
  return (
    <div className={style.card}>
      <div className={style.iconContainer}>{icon}</div>
      <h1 className={style.title}>{title}</h1>
      <p className={style.description}>{description}</p>
    </div>
  )
}

export default ProtectionCard
