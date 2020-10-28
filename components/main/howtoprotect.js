import React from 'react'
import cn from 'classnames'
import style from './style.module.scss'

import ProtectionCard from '../protection-card'
import * as Icon from '../icons'

function HowToProtectMain() {
  return (
    <div className={cn(style.main, style.protectMain)}>
      <h1 className={cn(style.title, style.protectTitle)}>
        How to Protect Yourself & Others
      </h1>
      <section className={style.cardContainer}>
        <ProtectionCard
          icon={<Icon.WashHand />}
          title="Wash your hand"
          description="Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing."
        />
        <ProtectionCard
          icon={<Icon.SocialDistance />}
          title="Avoid close contact"
          description="Avoid close contact with people who are sick. When you are sick, keep your distance from others to protect them from getting sick too."
        />
        <ProtectionCard
          icon={<Icon.Mask />}
          title="Wear a mask"
          description="Everyone should wear a mask in public settings and when around people who don’t live in your household, especially when other social distancing measures are difficult to maintain."
        />
        <ProtectionCard
          icon={<Icon.CoverCough />}
          title="Cover coughs and sneezes"
          description="Always cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow and do not spit."
        />
        <ProtectionCard
          icon={<Icon.Clean />}
          title="Clean and disinfect"
          description="Clean and disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks."
        />
        <ProtectionCard
          icon={<Icon.Healthcare />}
          title="Monitor Your Health Daily"
          description="Be alert for symptoms. Watch for fever, cough, shortness of breath, or other symptoms of COVID-19."
        />
      </section>
    </div>
  )
}

export default HowToProtectMain
