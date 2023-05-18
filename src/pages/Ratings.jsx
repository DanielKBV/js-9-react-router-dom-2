import React from 'react'
import { Box } from '../components/UI/Box'
import styled from '@emotion/styled'

export const Ratings = () => {
  return (
    <Box height='80vh'>
      <Container>
        <p>Ratings page</p>
      </Container>
    </Box>
  )
}

const Container = styled.div`
  padding: 20px;
  font-size: 3rem;
`
