import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 16px;
    };
    *,::after, ::before {
        box-sizing: inherit;
    };

    body {
        margin: 0 auto;
        background: ${({ theme }) => theme.color.background};
        font-family: "Roboto", sans-serif;
    };
    
    body::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    body::-webkit-scrollbar-track {
        border-radius: 10px; 
        background: ${({ theme }) => theme.color.mineShaft};
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px; 
        background: ${({ theme }) => theme.color.doveGray};
    }
    body::-webkit-scrollbar-thumb:hover{ 
  	    background: ${({ theme }) => theme.color.gray};
    }
    body::-webkit-scrollbar-thumb:active{ 
  	    background: ${({ theme }) => theme.color.nobel};
    }
`;
