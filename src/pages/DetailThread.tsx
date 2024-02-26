import { Avatar, Box, Button, Flex, FormControl, HStack, Heading, IconButton, Image, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { IoArrowUndo } from "react-icons/io5";
import { RiImageAddLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { getThreadById } from "../services/thread.services";
import { IThreadById } from "../interface/threads";

export default function DetailThread() {
    const [like, setLike] = useState(false);
    const [countLike, setCountLike] = useState<number>(700);
    const [clickLike, setClickLike] = useState(false);
    const [postImg, setPostImg] = useState<string>();
    const [thread, setThread] = useState<IThreadById | null>(null);

    const {
        state: { threadId },
    } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        async function fetchThreadData() {
            const dataThread = await getThreadById(Number(threadId));
            setThread(dataThread);
        }
        fetchThreadData();
    }, [threadId]);

    function handleLike() {
        setLike(!like);
        setClickLike(!clickLike);
        clickLike ? setCountLike(countLike - 1) : setCountLike(countLike + 1);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function parseDate(date: any) {
        return new Date(date).toDateString();
    }

    return (
        <>
            <Flex w={{ base: "100%", md: "100%" }} bg={"white"} color={"black"} border={"2px"} borderColor={"whitesmoke"} p={10} flexDir={"column"}>
                <Link to={"/"}>
                    <Flex flexDir={"row"} alignItems={"center"} gap={2} color={"black"}>
                        <IoArrowUndo />
                        <Heading as={"h3"} size={"md"}>
                            Status
                        </Heading>
                    </Flex>
                </Link>

                {/* CARD THREAD */}
                <Flex bg={"whitesmoke"} shadow={"lg"} p={10} w={"100%"} gap={4} mt={8} borderRadius={"lg"}>
                    <Avatar src="/img/paslon.jpg" name="profile" size={"sm"} />

                    <Flex flexDir={"column"} gap={2}>
                        <Flex gap={4} alignItems={"center"}>
                            <Heading as={"h5"} size={"sm"}>
                                {thread?.user.full_name}
                            </Heading>
                            <HStack>
                                <Link to={"/username"}>
                                    <Text fontWeight={"light"}>@{thread?.user.username}</Text>
                                </Link>
                                <Text> • {parseDate(thread?.created_at)}</Text>
                            </HStack>
                        </Flex>
                        <Text>{thread?.content}</Text>
                        {thread?.image && <Image src={thread.image} objectFit={"cover"} boxSize="xs" my={5} />}

                        <Flex gap={10} alignItems={"center"}>
                            <Flex gap={2} alignItems={"center"}>
                                <IconButton onClick={handleLike} colorScheme="inherit" icon={like ? <GoHeartFill size={25} color="red" /> : <GoHeart size={25} color="black" />} aria-label={"icon"} />
                                <Text>{thread?.likes_count}</Text>
                            </Flex>
                            <Flex gap={3}>
                                <HiOutlineChatBubbleBottomCenterText size={25} />
                                <Text>{thread?.replies_count} Replies</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>

                {/* INPUT REPLY */}
                <HStack spacing={4} mt={5} mb={10}>
                    <Avatar src="/img/paslon.jpg" name="profile" size={"sm"} />
                    <FormControl>
                        <Input type="text" placeholder="Type your reply here..." border={"none"} />
                    </FormControl>
                    <Box className="input-image">
                        <Box as={"label"} htmlFor="input-img">
                            <RiImageAddLine size={"30"} color="darkGreen" />
                        </Box>
                        <input type="file" id="input-img" style={{ display: "none" }} onChange={(e) => setPostImg(URL.createObjectURL(e.target.files![0]))} />
                    </Box>
                    <Button colorScheme="whatsapp" size="sm">
                        Reply
                    </Button>
                </HStack>
                {postImg && <Image objectFit={"cover"} ml={20} mt={5} w={200} h={200} src={postImg}></Image>}

                {/* CARD LIST REPLY */}

                {thread?.replies &&
                    thread.replies.map((reply) => (
                        <Flex bg={"whitesmoke"} p={5} w={"100%"} gap={4} mt={2} borderRadius={"lg"} key={reply.id}>
                            <Avatar src="/img/paslon.jpg" name="profile" size={"sm"} />

                            <Flex flexDir={"column"} gap={2}>
                                <Flex gap={4} alignItems={"center"}>
                                    <Heading as={"h5"} size={"sm"}>
                                        {reply.user.full_name}
                                    </Heading>
                                    <HStack>
                                        <Link to={"/username"}>
                                            <Text fontWeight={"light"}>@{reply.user.username}</Text>
                                        </Link>
                                        <Text> • {new Date(reply.created_at).toDateString()}</Text>
                                    </HStack>
                                </Flex>
                                <Text>{reply?.content}</Text>
                                {/* Image for replies */}
                                {/* {reply.image && <Image src={reply.image} objectFit={"cover"} boxSize="xs" my={5} />} */}

                                {/* Like and replies btn */}
                                {/* <Flex gap={10} alignItems={"center"}>
                                    <Flex gap={2} alignItems={"center"}>
                                        <IconButton onClick={handleLike} colorScheme="inherit" icon={like ? <GoHeartFill size={25} color="red" /> : <GoHeart size={25} color="black" />} aria-label={"icon"} />
                                        <Text>{countLike}</Text>
                                    </Flex>
                                    <Flex gap={3}>
                                        <HiOutlineChatBubbleBottomCenterText size={25} />
                                        <Text>{"600"} Replies</Text>
                                    </Flex>
                                </Flex> */}
                            </Flex>
                        </Flex>
                    ))}
            </Flex>
        </>
    );
}
