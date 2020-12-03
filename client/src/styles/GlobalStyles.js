import { createGlobalStyle } from 'styled-components';
import music from '../assets/music.jpg';

const GlobalStyles = createGlobalStyle`
html {
    background-image: url(${music})
}
`;

export default GlobalStyles;
