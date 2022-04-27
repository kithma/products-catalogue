import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './Theme';

export default createGlobalStyle<{ theme: ThemeProps }>`
  body {
    background: ${(props) => props.theme.colors.colorBackground};
	  font-family: 'Roboto', sans-serif;
    margin-bottom: 50px;
  }

  p {
	  margin:0;
  }
`