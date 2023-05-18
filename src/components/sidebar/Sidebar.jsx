import styled from '@emotion/styled'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <Box>
      <LogoContainer>
        <h1>LOGO</h1>
      </LogoContainer>
      <Ul>
        <Li>
          <LinkS
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/courses"
          >
            <p>Courses</p>
          </LinkS>
        </Li>
        <Li>
          <LinkS
            to="/announcement"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <p>Announcements</p>
          </LinkS>
        </Li>
        <Li>
          <LinkS
            to="/notifications"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <p>Notifications</p>
          </LinkS>
        </Li>
        <Li>
          <LinkS
            to="/schedule"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <p>Schedule</p>
          </LinkS>
        </Li>
      </Ul>
    </Box>
  )
}

const Box = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  background-color: #e6e4de;
  align-items: center;
  height: 100vh;
  gap: 60px;
`

const LogoContainer = styled.div`
  margin-top: 40px;
  color: #a600bb;
  font-size: 2rem;
`

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Li = styled.li`
  list-style: none;
  text-decoration: none;
  font-size: 2rem;

  .active {
    color: #000;
    background-color: #cc00ffc9;
    border: 1px solid #000;
    width: 260px;
  }
`

const LinkS = styled(NavLink)`
  padding: 10px 20px;
  text-decoration: none;
  color: #00ff;
  background-color: #fff;
  margin: 0;
  display: block;

  p {
    padding: 0;
    margin: 0;
  }
`
