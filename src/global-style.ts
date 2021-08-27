import { createGlobalStyle } from 'styled-components'
import { FontWeights, Colors } from './lib/style-guide'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-style: normal;
  }

  body, input {
    font-family: proxima-nova, sans-serif;
    font-weight: ${FontWeights.PR};
    font-size: 14px;
    line-height: 1.4rem;
    color: ${Colors.TX1};
  }

  svg, img {
    display: block;
  }

  #root {
    display: flex;
    min-height: 100vh;
    background: ${Colors.BG3};
  }
`
