import { Flex } from "@chakra-ui/react";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Profile from "./pages/Profile";

function App() {
    return (
        <>
            <Flex bg="grey" color={"white"} justify={"center"} w={"100%"}>
                <Navbar />
                <Home />
                <Profile />
            </Flex>
        </>
    );
}

export default App;
