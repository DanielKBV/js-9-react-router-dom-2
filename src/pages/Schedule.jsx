import styled from '@emotion/styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '../components/UI/Box'
import { Button } from '../components/UI/Button'

export const Schedule = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <Container>
        <p>Schedule Page</p>
        <div>
          <Button onClick={() => navigate('/notifications')}>
            Go to Notifications page
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
