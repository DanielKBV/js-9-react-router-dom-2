import React from 'react'
import { SlArrowLeft } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

export const GoBack = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return <ArrowLeftStyle onClick={goBack}></ArrowLeftStyle>
}

const ArrowLeftStyle = styled(SlArrowLeft)`
  position: fixed;
  top: 640px;
  left: 40px;
  font-weight: 600;
  font-size: 50px;
  color: #00aac4;
  cursor: pointer;

  :hover {
    color: #007385;
  }

  :active {
    color: #00aac4;
  }
`
