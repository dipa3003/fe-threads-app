import { Flex } from "@chakra-ui/react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import Follow from "./pages/Follow";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
// import "./app.css";

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<RootLayout />}>
//             {/* <Route index element={<Navbar />} /> */}
//             <Route path="home" element={<Home />} />
//             <Route path="search" element={<Search />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="*" element={<NotFound />} />
//         </Route>
//     )
// );

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
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/logout",
        element: <Logout />,
    },
]);

function App() {
    return (
        <>
            {/* <nav>
                    <NavLink to={"/"}>Navbar</NavLink>
                    <NavLink to={"/home"}>Home</NavLink>
                    <NavLink to={"/profile"}>Profile</NavLink>
                </nav> */}
            <Flex>
                <RouterProvider router={router} />
                {/* <Navbar /> */}
                {/* <Home /> */}
                {/* <Profile /> */}
            </Flex>
        </>
    );
}

export default App;
