import { Avatar, Box, Button, Flex, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import React from "react";
import { RiUserSearchLine } from "react-icons/ri";

const Search = () => {
    const handleSearchUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("you search user");
    };
    return (
        <Flex w={{ base: "100%", md: "100%" }} color={"black"} border={"2px"} borderColor={"whitesmoke"} p={10} flexDir={"column"}>
            <form onSubmit={handleSearchUser}>
                <Flex>
                    <InputGroup mb={8}>
                        <InputLeftElement pointerEvents="none">
                            <RiUserSearchLine />
                        </InputLeftElement>
                        <Input type="text" placeholder="Search User..." />
                    </InputGroup>
                    <Button colorScheme="teal" size="md" px={5} type="submit">
                        Search
                    </Button>
                </Flex>
            </form>

            {/* LIST SEARCH USER CARD */}
            <Box display={"flex"} gap={5} flexDir={"column"}>
                <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                    <Flex gap={3} alignItems={"center"}>
                        <Avatar src="/img/paslon.jpg" size={"sm"} />
                        <Flex flexDir={"column"}>
                            <Text fontSize={"sm"} fontWeight={"bold"}>
                                Jenifer Stewart
                            </Text>
                            <Text color={"grey"} fontSize={"xs"}>
                                @jenniferr
                            </Text>
                        </Flex>
                    </Flex>

                    <Button size={"xs"} rounded={"xl"} colorScheme="gray">
                        Follow
                    </Button>
                </Flex>
                <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                    <Flex gap={3} alignItems={"center"}>
                        <Avatar src="/img/paslon.jpg" size={"sm"} />
                        <Flex flexDir={"column"}>
                            <Text fontSize={"sm"} fontWeight={"bold"}>
                                Jenifer Stewart
                            </Text>
                            <Text color={"grey"} fontSize={"xs"}>
                                @jenniferr
                            </Text>
                        </Flex>
                    </Flex>

                    <Button size={"xs"} rounded={"xl"} colorScheme="gray">
                        Follow
                    </Button>
                </Flex>
                <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                    <Flex gap={3} alignItems={"center"}>
                        <Avatar src="/img/paslon.jpg" size={"sm"} />
                        <Flex flexDir={"column"}>
                            <Text fontSize={"sm"} fontWeight={"bold"}>
                                Jenifer Stewart
                            </Text>
                            <Text color={"grey"} fontSize={"xs"}>
                                @jenniferr
                            </Text>
                        </Flex>
                    </Flex>

                    <Button size={"xs"} rounded={"xl"} colorScheme="gray">
                        Follow
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Search;
