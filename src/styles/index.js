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
    max-width: 400px;
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
`

export const Container = styled.div`
	padding: 1.5rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 2px red dotted;
`
