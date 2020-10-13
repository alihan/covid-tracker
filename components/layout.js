import React from 'react'

import Header from './header'
import Main from './main'

function Layout({ children }) {
  return (
    <>
      <Header/>
      <Main>{children}</Main>
    </>
  )
}

export default Layout
