import styled from '@emotion/styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '../components/UI/Box'
import { Button } from '../components/UI/Button'

export const Notifications = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <Container>
        <p>Notifications Page</p>
        <div>
          <Button onClick={() => navigate('/courses/materials')}>
            Go to Material page
          </Button>
        </div>
      </Container>
    </Box>
  )
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  font-size: 3rem;
`
