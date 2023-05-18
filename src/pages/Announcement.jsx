import React from 'react'
import { Box } from '../components/UI/Box'
import styled from '@emotion/styled'
import { Button } from '../components/UI/Button'
import { useNavigate } from 'react-router-dom'

export const Announcement = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <Container>
        <p>Announcement Page</p>
        <div>
          <Button onClick={() => navigate('/courses/students')}>
            Go to Student page
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
