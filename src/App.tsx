// import { Flex } from "@chakra-ui/react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import Follow from "./pages/Follow";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import "./app.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/follow",
                element: <Follow />,
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
            {/* <Flex>
            </Flex> */}
        </>
    );
}

export default App;
