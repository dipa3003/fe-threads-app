import { Avatar, Box, Button, Flex, Input, InputGroup, InputLeftElement, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RiUserSearchLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IUser } from "../interface/threads";

const Search = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toast = useToast();
    const [findUser, setFindUser] = useState<IUser | null>(null);
    const users = useSelector((state: RootState) => state.allUser.data);

    const handleSearchUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userInput = e.currentTarget.username.value;

        const matchUser = users.find((value) => value.username == userInput);

        if (matchUser) setFindUser(matchUser);
        if (matchUser === undefined) {
            return toast({
                title: "Not Found User",
                description: "Make sure to input correct username.",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
            });
        }
    };

    return (
        <Flex w={{ base: "100%", md: "100%" }} color={"black"} border={"2px"} borderColor={"whitesmoke"} p={10} flexDir={"column"}>
            <form onSubmit={handleSearchUser}>
                <Flex>
                    <InputGroup mb={8}>
                        <InputLeftElement pointerEvents="none">
                            <RiUserSearchLine />
                        </InputLeftElement>
                        <Input type="text" name="username" placeholder="Search User..." />
                    </InputGroup>
                    <Button colorScheme="teal" size="md" px={5} type="submit">
                        Search
                    </Button>
                </Flex>
            </form>

            {/* FIND USER CARD */}
            {findUser && (
                <Box display={"flex"} gap={5} flexDir={"column"} bg="whitesmoke" p={3} borderRadius={8}>
                    <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex gap={3} alignItems={"center"}>
                            <Avatar src={findUser.image ? findUser.image : ""} size={"sm"} objectFit={"cover"} />
                            <Flex flexDir={"column"}>
                                <Text fontSize={"sm"} fontWeight={"bold"}>
                                    {findUser.full_name}
                                </Text>
                                <Text color={"grey"} fontSize={"xs"}>
                                    @{findUser.username}
                                </Text>
                            </Flex>
                        </Flex>

                        <Button size={"sm"} rounded={"xl"} colorScheme="gray">
                            Follow
                        </Button>
                    </Flex>
                </Box>
            )}
        </Flex>
    );
};

export default Search;
