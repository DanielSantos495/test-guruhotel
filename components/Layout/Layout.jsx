import React from 'react'

import { Header } from '@/components/Header/Header'

import { main } from '@/styles/components/Layout.module.scss'

export const Layout = ({ children }) => {

   return(
      <>
         <Header />
         <main className={main}>
            {children}
         </main>
      </>
   )
}
