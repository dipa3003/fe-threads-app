import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import Profile from "../pages/Profile";

const RootLayout = () => {
    return (
        <Flex bg="white" justifyContent={"space-between"} position={"relative"}>
            <Box w={"25%"} display={{ base: "none", md: "block" }}>
                <Navbar />
            </Box>

            <Box w={{ base: "100%", md: "75%", lg: "75%" }}>
                <Outlet />
            </Box>

            <Box w={"40%"} bg={"yellow"} display={{ base: "none", lg: "block" }}>
                <Profile />
            </Box>
        </Flex>
    );
};

export default RootLayout;
