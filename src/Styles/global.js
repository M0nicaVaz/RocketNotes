import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        font-size: 62.5%;
    }


    ::-webkit-scrollbar {
    width: 6px;
    }


    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 10px;
    }


    ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 10px;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
    
        -webkit-font-smoothing: antialiased;
    }


    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

`;
