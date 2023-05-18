import styled from '@emotion/styled'
import React from 'react'

export const Button = ({ children, onClick }) => {
  return <ButtonS onClick={onClick}>{children}</ButtonS>
}

const ButtonS = styled.button`
  background-color: #14ae9e;
  color: #fff;
  font-size: 1.6rem;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
	border: 1px solid #14ae9e;

  :hover {
    background-color: #fff;
    color: #14ae9e;
    transition: 0.4s;
    border: 1px solid #14ae9e;
  }

  :active {
    background-color: #14ae9e;
    color: #fff;
  }

  cursor: pointer;
`
