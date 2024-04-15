import { Avatar, Button, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getFollows } from "../services/follow.services";
import { IFollower } from "../interface/follow";
import { useNavigate } from "react-router-dom";
import CardFollowings from "../component/cardFollowings";
import { useDispatch, useSelector } from "react-redux";
import { GET_FOLLOWINGS } from "../redux/features/followingSlice";
import { RootState } from "../redux/store";

const Follow = () => {
    const [follower, setFollower] = useState<IFollower[] | null>(null);
    // const [following, setFollowing] = useState<IFollowing[] | null>(null);
    const followings = useSelector((state: RootState) => state.following.data);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);

        const itemStr = localStorage.getItem("item");
        if (!itemStr) {
            return navigate("/login");
        }
        const item = JSON.parse(itemStr!);

        if (new Date().getTime() > item.expiry) {
            localStorage.removeItem("item");
            navigate("/login");
        }
        async function fetchFollow() {
            const response = await getFollows(Number(item.userId));
            setFollower(response.follower);
            // setFollowing(response.following);
            dispatch(GET_FOLLOWINGS(response.following));
        }
        fetchFollow();
    }, [dispatch, navigate]);

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
                        {followings && followings.map((following) => <CardFollowings key={following.id} id={following.id} created_at={following.created_at} follower={following.follower} />)}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
};

export default Follow;
