import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { GoHeart, GoHome } from "react-icons/go";
import { RiLogoutCircleLine, RiUserSearchLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <Flex position={"sticky"} top={"0"} as="nav" w={{ base: "0", md: "25%", lg: "100%" }} p={10} flexDir={"column"} gap={8} minH={"100vh"}>
            <Link to={"/"}>
                <Heading as="h1" color={"lime"}>
                    LIFE
                </Heading>
            </Link>

            <NavLink to={"/"}>
                <Flex flexDir={"row"} alignItems={"center"} gap={2} color={"black"}>
                    <GoHome />
                    <Text>Home</Text>
                </Flex>
            </NavLink>

            <NavLink to={"/search"}>
                <Flex flexDir={"row"} alignItems={"center"} gap={2} color={"black"}>
                    <RiUserSearchLine />
                    <Text>Search</Text>
                </Flex>
            </NavLink>

            <NavLink to={"/follow"}>
                <Flex flexDir={"row"} alignItems={"center"} gap={2} color={"black"}>
                    <GoHeart />
                    <Text>Follows</Text>
                </Flex>
            </NavLink>

            <NavLink to={"/profile"}>
                <Flex flexDir={"row"} alignItems={"center"} gap={2} color={"black"}>
                    <CgProfile />
                    <Text>Profile</Text>
                </Flex>
            </NavLink>

            <Link to={"/create-thread"}>
                <Button colorScheme="whatsapp" variant="solid" w={"full"}>
                    Create Post
                </Button>
            </Link>

            <Link to={"/login"}>
                <Flex flexDir={"row"} alignItems={"center"} gap={2} mt="200" color={"black"} bgColor={"whitesmoke"} borderRadius={6}>
                    <RiLogoutCircleLine />
                    Logout
                </Flex>
            </Link>
        </Flex>
    );
};
export default Navbar;
