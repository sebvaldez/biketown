import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
	html {
		box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: none;

	}
  body {
		margin: 0;
		padding: 0;
  }

  .logo {
    min-width: 220px;
    max-width: 320px;
    padding: 0;
    margin: 0;
  }

  .leaflet-container {
    margin: 2rem 0;
    border: 2px blue dotted;
    height: 600px;
    max-height: 320px;
    width: calc(100vw - 3rem)
  }

  // styles for desktop
  @media screen and (min-width: 768px) {
    .logo {
      max-width: 400px
    }
  }

`

export const Container = styled.div`
	padding: 1.5rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* border: 2px red dotted; */
`

export const StyledNav = styled.nav`
	position: absolute;
	top: 0;
	/* border: 3px purple dotted; */
	width: 100vw;
	padding: 0.5rem;
	display: flex;
	flex-direction: reverse;
	justify-content: space-between;
`
