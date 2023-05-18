import styled from '@emotion/styled'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <Container>
      <Box>
        <ConLink>
          <LinkS
            to="materials"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Materials
          </LinkS>
        </ConLink>
        <ConLink>
          <LinkS
            to="students"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Students
          </LinkS>
        </ConLink>
        <ConLink>
          <LinkS
            to="ratings"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Ratings
          </LinkS>
        </ConLink>
      </Box>

      <Main>
        <Outlet />
      </Main>
    </Container>
  )
}

const Box = styled.div`
  padding: 30px 20px;
  height: 80px;
  background-color: #00ff;
  display: flex;
  align-items: center;

  font-size: 2rem;
  gap: 40px;
`

const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ConLink = styled.div`
  cursor: pointer;
  text-decoration: none;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    margin: 0px 0;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  .active {
    color: #000;
    border-bottom: 2px solid #fff;
  }
`

const LinkS = styled(NavLink)`
  color: #fff;
  text-decoration: none;
`

const Main = styled.div`
  width: 100%;
  height: 100%;
`
