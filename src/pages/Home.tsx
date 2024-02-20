import { Avatar, Box, Button, Flex, FormControl, HStack, Heading, Image, Input, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IThreads, IUser } from "../interface/threads";
import CardThread from "../component/cardThread";
import { RiImageAddLine } from "react-icons/ri";
import { getThreads } from "../services/thread.services";
import { getLoginUser } from "../services/user.services";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [threads, setThreads] = useState<IThreads[] | null>(null);
    const [userProfile, setUserProfile] = useState<IUser | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [postImg, setPostImg] = useState<any>();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/login");

        const userId = Number(localStorage.getItem("userId"));

        async function fetchUserLogin() {
            if (userId) {
                const userLogin = await getLoginUser(userId);
                setUserProfile(userLogin);
            }
        }
        fetchUserLogin();
    }, [navigate]);

    useEffect(() => {
        localStorage.getItem("token");

        async function fetchData() {
            const threadsData = await getThreads();
            setThreads(threadsData);
        }
        fetchData();
    }, []);

    console.log("userProfile:", userProfile);

    return (
        <Flex w={"100%"} bg={"green"}>
            <Flex w={{ base: "100%", md: "100%" }} bg={"white"} color={"black"} border={"2px"} borderColor={"whitesmoke"} p={10} flexDir={"column"}>
                <Heading as={"h3"} size={"md"}>
                    Home
                </Heading>

                <HStack spacing={4} mt={5}>
                    <Avatar src="/img/paslon.jpg" name="profile" size={"md"} />
                    <FormControl>
                        <Input type="text" placeholder="What is happening?!" border={"none"} />
                    </FormControl>
                    <Box className="input-image">
                        <Box as={"label"} htmlFor="input-img">
                            <RiImageAddLine size={"40"} color="darkGreen" />
                        </Box>
                        <input type="file" id="input-img" style={{ display: "none" }} onChange={(e) => setPostImg(URL.createObjectURL(e.target.files![0]))} />
                    </Box>
                    <Button colorScheme="whatsapp" size="sm">
                        Button
                    </Button>
                </HStack>
                {postImg && <Image ml={20} mt={5} w={200} h={200} src={postImg}></Image>}

                <VStack>
                    {threads &&
                        threads.map((thread) => (
                            <CardThread
                                key={thread.id}
                                id={thread.id}
                                user={thread.user}
                                username={thread.user.username}
                                full_name={thread.user.full_name}
                                created_at={new Date(thread.created_at).toDateString()}
                                content={thread.content}
                                image={thread.image}
                                likes_count={thread.likes_count}
                                replies={700}
                            />
                        ))}
                </VStack>
            </Flex>
            {/* <Box w={"40%"} display={{ base: "none", lg: "block" }}>
                <Profile />
            </Box> */}
        </Flex>
    );
};

export default Home;
