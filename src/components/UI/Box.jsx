import styled from '@emotion/styled'
import React from 'react'

export const Box = ({ children, height='90vh', padding='20px' }) => {
	return (
		<Container height={height} padding={padding}>{children}</Container>
	)
}

const Container = styled.div`
	width: 96%;
	height: ${props => props.height};
	background-color: #fff;
	border-radius: 6px;
	margin: 20px;
	padding: ${props => props.padding};
`
