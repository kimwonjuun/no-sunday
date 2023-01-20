import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    input{
        margin: 0;
        bottom: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-size: inherit;
    line-height: inherit;
    }

    body{
        color: #202020;
        font-size: 16px;
        line-height: 1.7;
    }

    ul{
        list-style: none;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    button,
    input {
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0;
    }

    button{
        cursor: pointer;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    div {
        box-sizing: border-box;
    }

    main {
    display: block;
    }
`;

export default GlobalStyle;
