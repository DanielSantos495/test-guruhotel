import React from 'react'
import PropTypes from 'prop-types'

import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

import { search__container, search__img } from '@/styles/components/Search.module.scss'

export const Search = (props) => {

   const {
      form = {},
      handleInput,
      handleButton
   } = props
   const iconSearch = '/icons/magnifying-glass.png'

   return(
      <section className={search__container}>
         <Input
            type='text'
            value={form.place}
            name='place'
            placeholder='¿Qué buscas?'
            onChange={handleInput}
            width='100%'
            height='40px'
         />
         <Input
            type='text'
            value={form.location}
            name='location'
            placeholder='¿Dónde lo buscas?'
            onChange={handleInput}
            width='100%'
            height='40px'
         />
         <Button type='button' onClick={handleButton} width='150px' height='40px'>
            Buscar
            <img className={search__img} src={iconSearch} />
         </Button>
      </section>
   )
}

Search.propTypes = {
   form: PropTypes.shape({
      place: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired
   }).isRequired,
   handleInput: PropTypes.func.isRequired,
   handleButton: PropTypes.func.isRequired
}