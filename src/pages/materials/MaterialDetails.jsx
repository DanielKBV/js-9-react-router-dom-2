import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { Box } from '../../components/UI/Box'
import styled from '@emotion/styled'

export const MaterialDetails = () => {
  const { id } = useParams()

  return (
    <Box height="50vh" padding="0">
      <Container>
        <ContainerMaterialText>
          <p>Material Details Page:</p>
          <p>Material {id}</p>
        </ContainerMaterialText>
        <ContainerTime>
          <ContainerNavTime>
            <LinkS
              to="submitted"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <p>Submitted</p>
            </LinkS>
            <LinkS
              to="waiting"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <p>Waiting</p>
            </LinkS>
            <LinkS
              to="late"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <p>Late</p>
            </LinkS>
          </ContainerNavTime>
          <ContainerBlokTime>{<Outlet />}</ContainerBlokTime>
        </ContainerTime>
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

const ContainerTime = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
`

const ContainerNavTime = styled.div`
  display: flex;
  padding: 10px 20px;
  background-color: #14ae9e;
  font-size: 2rem;
  gap: 40px;
  font-weight: 500;

  .active {
    color: #000;
    border-bottom: 4px solid #fff;
  }
`

const LinkS = styled(NavLink)`
  color: #fff;
  text-decoration: none;
`

const ContainerBlokTime = styled.div`
  width: 100%;
  height: 36vh;
  background-color: #d0f0ed;

  p {
    font-size: 3rem;
    padding: 20px;
  }
`
