import { Alert, AlertIcon, Avatar, Box, Button, Flex, HStack, Heading, Image, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IThreads } from "../interface/threads";
import CardThread from "../component/cardThread";
import { RiImageAddLine } from "react-icons/ri";
import { getThreads, postThread } from "../services/thread.services";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [threads, setThreads] = useState<IThreads[] | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [postImg, setPostImg] = useState<any>();
    const [postAlert, setPostAlert] = useState(false);
    // const [thread, setThread] = useState({
    //     content: "",
    //     image: "",
    // });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/login");
    }, [navigate]);

    useEffect(() => {
        localStorage.getItem("token");

        async function fetchData() {
            const threadsData = await getThreads();
            setThreads(threadsData);
        }
        fetchData();
    }, []);

    const createThread = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const content = e.currentTarget.content.value;
        const image = e.currentTarget.image.files[0];

        const dataThread = { content, image };
        // setThread(dataThread);

        const token = localStorage.getItem("token");
        if (token) {
            if (dataThread.content.length == 0 || dataThread.image.length == 0) return setPostAlert(true);

            const res = await postThread(dataThread, token);
            if (res.statusText === "Unauthorized") {
                localStorage.removeItem("token");
                navigate("/login");
            }

            console.log("res from server:", res);

            if (res.statusText === "Created" || res.status === 201) {
                window.location.reload();
            }
        } else {
            navigate("/login");
        }
    };

    return (
        <Box>
            <Flex w={{ base: "100%", md: "100%" }} color={"black"} border={"2px"} borderColor={"whitesmoke"} p={10} flexDir={"column"}>
                <Heading as={"h3"} size={"md"}>
                    Home
                </Heading>

                <form onSubmit={createThread}>
                    <HStack spacing={4} mt={5}>
                        <Avatar src="/img/paslon.jpg" name="profile" size={"md"} />
                        <Input type="text" placeholder="What is happening?!" border={"none"} name="content" />
                        <Box className="input-image">
                            <Box as={"label"} htmlFor="input-img">
                                <RiImageAddLine size={"40"} color="darkGreen" />
                            </Box>
                            <input name="image" type="file" id="input-img" style={{ display: "none" }} onChange={(e) => setPostImg(URL.createObjectURL(e.target.files![0]))} />
                        </Box>
                        <Button colorScheme="whatsapp" size="md" type="submit">
                            Post
                        </Button>
                    </HStack>
                </form>
                {postImg && <Image objectFit={"cover"} ml={20} mt={5} w={200} h={200} src={postImg}></Image>}
                {postAlert && (
                    <Alert status="error">
                        <AlertIcon />
                        Login field can not be empty!
                    </Alert>
                )}

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
                                replies_count={thread.replies_count}
                            />
                        ))}
                </VStack>
            </Flex>
            {/* <Box w={"40%"} display={{ base: "none", lg: "block" }}>
                <Profile />
            </Box> */}
        </Box>
    );
};

export default Home;
