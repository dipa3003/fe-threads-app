import { Flex } from "@chakra-ui/react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";
// import "./app.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {/* <Route index element={<Navbar />} /> */}
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<Profile />} />
        </Route>
    )
);

function App() {
    return (
        <>
            {/* <nav>
                    <NavLink to={"/"}>Navbar</NavLink>
                    <NavLink to={"/home"}>Home</NavLink>
                    <NavLink to={"/profile"}>Profile</NavLink>
                </nav> */}
            <Flex color={"white"}>
                <RouterProvider router={router} />
                {/* <Navbar /> */}
                {/* <Home /> */}
                {/* <Profile /> */}
            </Flex>
        </>
    );
}

export default App;
