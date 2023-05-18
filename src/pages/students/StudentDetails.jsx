import styled from '@emotion/styled'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '../../components/UI/Box'

export const StudentDetails = () => {
  const { id } = useParams()

  return (
    <Box height="80vh" padding="0">
      <Container>
        <ContainerMaterialText>
          <p>Student Details Page:</p>
          <p>Student Name {id}</p>
        </ContainerMaterialText>
      </Container>
    </Box>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const ContainerMaterialText = styled.div`
  font-size: 2rem;
  padding: 20px;
`
