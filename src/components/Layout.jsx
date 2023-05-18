import styled from '@emotion/styled'
import React from 'react'
import { Sidebar } from './sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <Box>
        <Outlet />
      </Box>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const Box = styled.div`
  width: 100%;
  background-color: #bbbbbb;
`
