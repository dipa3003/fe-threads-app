import { Avatar, Button, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const Follow = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Flex w={{ base: "100%", md: "100%" }} color={"black"} border={"2px"} borderColor={"whitesmoke"} p={10} flexDir={"column"}>
            <Heading as={"h3"} size={"md"}>
                Follow People
            </Heading>
            <Tabs isFitted variant="enclosed" mt={5}>
                <TabList mb="1em">
                    <Tab>Followers</Tab>
                    <Tab>Following</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel display={"flex"} gap={5} flexDir={"column"}>
                        {/* LIST FOLLOWERS */}
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

                            <Button size={"xs"} rounded={"xl"} colorScheme="gray" opacity={"40%"}>
                                Following
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
                    </TabPanel>
                    <TabPanel display={"flex"} gap={5} flexDir={"column"}>
                        {/* LIST FOLLOWING */}
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

                            <Button size={"xs"} rounded={"xl"} colorScheme="gray" opacity={"40%"}>
                                Following
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

                            <Button size={"xs"} rounded={"xl"} colorScheme="gray" opacity={"40%"}>
                                Following
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

                            <Button size={"xs"} rounded={"xl"} colorScheme="gray" opacity={"40%"}>
                                Following
                            </Button>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
};

export default Follow;
