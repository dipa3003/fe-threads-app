import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import { Box, Flex } from "@chakra-ui/react";

const RootLayout = () => {
    return (
        <Flex>
            <Navbar />

            <Box ml={"380px"}>
                <Outlet />
            </Box>
        </Flex>
    );
};

export default RootLayout;
