import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/paper/Paper'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography'

import { Container, GlobalStyles } from '../styles'
import Map from './map/Map'
import { ThemeProvider } from '../contexts/Theme'
import Nav from './Nav'


const useStyles = makeStyles(() => ({
	root: {
		padding: '1.5rem'
	}
}))

const MapWithLogo = () => {
	const classes = useStyles()
	return (
		<Paper className={classes.root} align="center">
		<img className='logo' src='./public/BikeTownLogo.svg' />
		<Map />
	</Paper>
	)	
}

const InfoDrawer = () => {
	// expect a active bike prop
	

	const [ toggle, setToggle ] = React.useState(false)
	const handleToggle = () => setToggle((t) => !t)

	return (
		<>
			<button onClick={handleToggle}>
				<Typography>
					{`The drawer is ${toggle ? 'Open' : 'Closed'}`}
				</Typography>
			</button>
			<Drawer anchor='bottom' open={toggle} onClose={handleToggle}>
				<Paper>
					<Typography>
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
						Hello this is the drawer!!!
					</Typography>
				</Paper>
			</Drawer>
		</>
	)
}

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
					<CssBaseline />
					<GlobalStyles />
					<Nav />
					<MapWithLogo />
					<InfoDrawer />
				</ThemeProvider>
			</Container>
		)
	}
}
export default App