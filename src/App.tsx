import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Profile from "./routes/profile";
import { useEffect, useState } from "react";
import {auth} from "../fireBase.ts";
import LoadingScreen from "./components/loding-screen.tsx";
import CreateAccount from "./routes/create-account.tsx";
import ProtectedRoute from "./components/protected-route.tsx";
import Login from "./routes/login.tsx";
import Calender from "./routes/calender.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <ProtectedRoute> <Home /></ProtectedRoute>,
    },
    {
        path: "/profile",
        element:<ProtectedRoute> <Profile /> </ProtectedRoute>,
    },
    {
        path : "/calender",
        element: <ProtectedRoute> <Calender /> </ProtectedRoute>,
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
        <>
            {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
        </>

    );
}

export default App;
