
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ChakraProvider} from "@chakra-ui/react";
import {RecoilRoot} from "recoil";
import reset from "styled-reset";
import {createGlobalStyle} from "styled-components";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body {
    background-color: black !important;
    color: whitesmoke !important;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

root.render(
     <>
         <GlobalStyle/>

            <ChakraProvider>
                <RecoilRoot>
                    <App />
                </RecoilRoot>
            </ChakraProvider>


        </>


);
