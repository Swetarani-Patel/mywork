import React from 'react'
import { Button } from '@chakra-ui/react'

function CategoryBtn({text, onClick}) {
  return (
    <Button variant="outline" mt={6} mr={2} onClick={onClick}>{text}</Button>
  )
}

export default CategoryBtn
