import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
        --overallBackground: #999CA0;
        --grey: #343A41;
        --yellow: #E5E16B;
}

    body {
        margin: 0;
        padding: 0;
        min-width: 1024px;
        margin: auto;
        background: var(--overallBackground);
        font-weight: 500;
        overflow-x: hidden;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`;

export default GlobalStyles;