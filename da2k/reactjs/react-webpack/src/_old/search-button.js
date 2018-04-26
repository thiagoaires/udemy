'use strict'

import React from 'react'
import Button from './button'

const SearchButton = () => (
  <Button handleClick={() => alert('search')}>
    Procurar
  </Button>
)

export default SearchButton
