import React from 'react'
import { useRouter } from 'next/router'

import { header }  from '@/styles/components/Header.module.scss'

export const Header = () => {

   const { push } = useRouter()

   return(
      <header className={header}>
         <button type='button' onClick={() => push('/')}>
            <h1>Shops</h1>
         </button>
      </header>
   )
}
