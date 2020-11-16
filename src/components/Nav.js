import React from 'react'
import Switch from '@material-ui/core/Switch'
import ThemeContext from '../contexts/Theme'
import { StyledNav } from '../styles/'

const Nav = () => {
	const { theme, toggleTheme } = React.useContext(ThemeContext)
	return (
		<StyledNav>
			<Switch
				color='Primary'
				name='Dark Mode'
				onChange={toggleTheme}
				checked={theme === 'light' ? true : false}
			/>
		</StyledNav>
	)
}

export default Nav
