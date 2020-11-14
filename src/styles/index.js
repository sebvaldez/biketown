import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
	html {
		box-sizing: border-box;
	}
  body {
		margin: 0;
		padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    border: 2px red dotted;
  }
`
