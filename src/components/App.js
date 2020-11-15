import React from 'react'
import { Container, GlobalStyles } from '../styles'
import Map from './map/Map'
import { ThemeProvider } from '../contexts/Theme'
import Nav from './Nav'

class App extends React.Component {
	state = {
		theme: 'light',
		toggleTheme: () => {
			this.setState( ({theme}) => ({theme: theme === 'light' ? 'dark' : 'light' }) )
		}
	}

	render() {
		return (
			<Container>
				<ThemeProvider value={this.state}>
					<GlobalStyles />
					<Nav />
					<img className='logo' src='./public/BikeTownLogo.svg' />
					<Map />
				</ThemeProvider>
			</Container>
		)
	}
}
export default App