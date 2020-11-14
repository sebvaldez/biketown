import React from 'react'
import { Container, GlobalStyles } from '../styles'
import Map from './map/Map'

export default function App() {
	return (
		<Container>
			<GlobalStyles />
			<img className='logo' src='./public/BikeTownLogo.svg' />
			<Map />
		</Container>
	)
}
