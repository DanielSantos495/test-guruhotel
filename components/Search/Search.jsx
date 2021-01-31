import React from 'react'

// import {  } from '@/styles/Search/Search.scss'

export const Search = (props) => {

   const {
      form,
      handleInput,
      handleButton
   } = props
   const iconSearch = '/icons/magnifying-glass.png'

   return(
      <section>
         <label htmlFor='place'>
            <input
               type='text'
               value={form.place}
               name='place'
               placeholder='¿Qué buscas?'
               onChange={handleInput}
            />
         </label>
         <label htmlFor='location'>
            <input
               type='text'
               value={form.location}
               name='location'
               placeholder='¿Dónde lo buscas?'
               onChange={handleInput}
            />
         </label>
         <button type='button' onClick={handleButton}>
            Buscar
            <img src={iconSearch} />
         </button>
      </section>
   )
}