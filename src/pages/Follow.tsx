import { Avatar, Button, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getFollows } from "../services/follow.services";
import { IFollower, IFollowing } from "../interface/follow";

const Follow = () => {
    const [follower, setFollower] = useState<IFollower[] | null>(null);
    const [following, setFollowing] = useState<IFollowing[] | null>(null);
    const itemStr = localStorage.getItem("item");
    const item = JSON.parse(itemStr!);

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchFollow() {
            const response = await getFollows(Number(item.userId));
            setFollower(response.follower);
            setFollowing(response.following);
        }
        fetchFollow();
    }, [item.userId]);

    return (
        <Flex w={{ base: "100%", md: "100%" }} color={"black"} border={"2px"} borderColor={"whitesmoke"} p={10} flexDir={"column"}>
            <Heading as={"h3"} size={"md"}>
                Follow People
            </Heading>
            <Tabs isFitted variant="enclosed" mt={5}>
                <TabList mb="1em">
                    <Tab>Followers</Tab>
                    <Tab>Followings</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel display={"flex"} gap={5} flexDir={"column"}>
                        {/* LIST FOLLOWERS */}

                        {follower &&
                            follower.map((item) => (
                                <Flex gap={3} alignItems={"center"} justifyContent={"space-between"} key={item.id}>
                                    <Flex gap={3} alignItems={"center"}>
                                        <Avatar src={item.following.image} size={"sm"} />
                                        <Flex flexDir={"column"}>
                                            <Text fontSize={"sm"} fontWeight={"bold"}>
                                                {item.following.full_name}
                                            </Text>
                                            <Text color={"grey"} fontSize={"xs"}>
                                                @{item.following.username}
                                            </Text>
                                        </Flex>
                                    </Flex>

                                    <Button size={"sm"} rounded={"xl"} colorScheme="gray">
                                        Remove
                                    </Button>
                                </Flex>
                            ))}
                    </TabPanel>
                    <TabPanel display={"flex"} gap={5} flexDir={"column"}>
                        {/* LIST FOLLOWING */}

                        {following &&
                            following.map((item) => (
                                <Flex gap={3} alignItems={"center"} justifyContent={"space-between"} key={item.id}>
                                    <Flex gap={3} alignItems={"center"}>
                                        <Avatar src={item.follower.image} size={"sm"} />
                                        <Flex flexDir={"column"}>
                                            <Text fontSize={"sm"} fontWeight={"bold"}>
                                                {item.follower.full_name}
                                            </Text>
                                            <Text color={"grey"} fontSize={"xs"}>
                                                @{item.follower.username}
                                            </Text>
                                        </Flex>
                                    </Flex>

                                    <Button size={"sm"} rounded={"xl"} colorScheme="gray" opacity={"50%"}>
                                        Following
                                    </Button>
                                </Flex>
                            ))}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
};

export default Follow;
