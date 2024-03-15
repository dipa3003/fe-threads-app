import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import SidebarProfile from "../pages/SidebarProfile";

const RootLayout = () => {
    return (
        <Flex bg="white" justifyContent={"space-between"} position={"relative"}>
            <Box w={"25%"} display={{ base: "none", lg: "block" }}>
                <Navbar />
            </Box>

            <Box w={{ base: "100%", md: "75%", lg: "75%" }}>
                <Outlet />
            </Box>

            <Box w={"40%"} display={{ base: "none", lg: "block" }}>
                <SidebarProfile />
            </Box>
        </Flex>
    );
};

export default RootLayout;
