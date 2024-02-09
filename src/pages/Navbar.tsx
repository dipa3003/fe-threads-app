import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { GoHeart, GoHome } from "react-icons/go";
import { RiLogoutCircleLine, RiUserSearchLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Flex w={"25%"} p={10} flexDir={"column"} gap={8} bgColor={"white"} position={"fixed"} left={0}>
            <Link to={"/"}>
                <Heading color={"lime"}>LIFE</Heading>
            </Link>

            {/* <Link href="/test" display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                </Link> */}

            <NavLink to={"/home"}>
                <Flex flexDir={"row"} alignItems={"center"} gap={2} color={"black"}>
                    <GoHome />
                    <Text>Home</Text>
                </Flex>
            </NavLink>
            <NavLink to={"/profile"}>
                <Flex flexDir={"row"} alignItems={"center"} gap={2} color={"black"}>
                    <CgProfile />
                    <Text>Profile</Text>
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
            <Link to={"/create-thread"}>
                <Button colorScheme="whatsapp" variant="solid" w={"full"}>
                    Create Post
                </Button>
            </Link>
            <Link to={"/logout"}>
                <Flex flexDir={"row"} alignItems={"center"} gap={2} mt={"100%"} color={"black"}>
                    <RiLogoutCircleLine />
                    Logout
                </Flex>
            </Link>

            {/* <Link href="/search" display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                    <RiUserSearchLine />
                    <Text>Search</Text>
                </Link>

                <Link href="/follows" display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                    <GoHeart />
                    <Text>Follows</Text>
                </Link>

                <Link href="/profile" display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                    <CgProfile />
                    <Text>Profile</Text>
                </Link> */}

            {/* <Button colorScheme="whatsapp" variant="solid">
                    <Link href={"/post"}>
                        <HStack>
                            <Text>Create Post</Text>
                        </HStack>
                    </Link>
                </Button> */}

            {/* <Link href={"/logout"}>
                    <HStack display={"flex"} flexDir={"row"} alignItems={"center"} gap={2} mt={"100%"}>
                        <RiLogoutCircleLine />
                        <Text>Logout</Text>
                    </HStack>
                </Link> */}
        </Flex>
    );
};
export default Navbar;
