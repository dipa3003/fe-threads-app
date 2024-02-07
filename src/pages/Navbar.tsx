import { Button, Flex, HStack, Heading, Link, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { GoHeart, GoHome } from "react-icons/go";
import { RiLogoutCircleLine, RiUserSearchLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <>
            <Flex w={"25%"} p={10} flexDir={"column"} gap={8} bgColor={"#1d1d1d"} position={"fixed"} left={0}>
                <Heading color={"lime"}>Circle</Heading>

                <Link href="/test" display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                    <GoHome />
                    <Text>Home</Text>
                </Link>

                <Link href="/search" display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
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
                </Link>

                <Button colorScheme="whatsapp" variant="solid">
                    <Link href={"/post"}>
                        <HStack>
                            <Text>Create Post</Text>
                        </HStack>
                    </Link>
                </Button>

                <Link href={"/logout"}>
                    <HStack display={"flex"} flexDir={"row"} alignItems={"center"} gap={2} mt={"100%"}>
                        <RiLogoutCircleLine />
                        <Text>Logout</Text>
                    </HStack>
                </Link>
            </Flex>
        </>
    );
};
export default Navbar;
