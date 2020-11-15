import React from 'react'
import ThemeContext from '../contexts/Theme'
import { StyledNav } from '../styles/'

const Nav = () => {
	const { theme, toggleTheme } = React.useContext(ThemeContext)
	return (
		<StyledNav>
			<button onClick={toggleTheme}>{theme}</button>
		</StyledNav>
	)
}

export default Nav
