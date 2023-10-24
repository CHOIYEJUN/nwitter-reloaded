import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/auth/layout.tsx";
import Home from "./routes/home";
import Profile from "./routes/profile";

import {createGlobalStyle, styled} from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import {auth} from "../fireBase.ts";
import LoadingScreen from "./components/loding-screen.tsx";
import CreateAccount from "./routes/create-account.tsx";
import ProtectedRoute from "./components/protected-route.tsx";
import Login from "./routes/login.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute> <Layout /> </ProtectedRoute>,
        children: [
            {
                path: "",
                element: <ProtectedRoute> <Home /> </ProtectedRoute>,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
    {
        path: "/create-account",
        element: <CreateAccount />,
    },
    {
        path: "login",
        element: <Login />,
    },


]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
  
  
`

function App() {
    const [isLoading, setLoading] = useState(true);
    const init =  () => {
         auth.authStateReady();
        setLoading(false);
    };
    useEffect(() => {
        init();
    }, []);
    return (
        <Wrapper>
            <GlobalStyles />
            {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
        </Wrapper>
    );
}

export default App;