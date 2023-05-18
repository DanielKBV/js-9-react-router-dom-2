import React from 'react'
import { Box } from '../../components/UI/Box'
import styled from '@emotion/styled'
import { Button } from '../../components/UI/Button'
import { NavLink } from 'react-router-dom'

const studentName = [
  {
    id: '1',
    title: 'Student Name 1',
  },
  {
    id: '2',
    title: 'Student Name 2',
  },
]

export const Students = () => {
  return (
    <Container>
      <ContainerMaterials>
        {studentName.map((item) => (
          <BoxMaterials key={item.id}>
            <p>{item.title}</p>

            <NavLink to={`${item.id}/details`}>
              <Button>Details</Button>
            </NavLink>
          </BoxMaterials>
        ))}
      </ContainerMaterials>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 140px;
`

const ContainerMaterials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const BoxMaterials = styled.div`
  display: flex;
  width: 1200px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  font-size: 2rem;
  border-radius: 4px;
`
