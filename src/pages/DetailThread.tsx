import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Heading, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { IoArrowUndo } from "react-icons/io5";
import { RiImageAddLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getThreadById } from "../services/thread.services";
import { useDispatch, useSelector } from "react-redux";
import { GET_DETAIL_THREAD } from "../redux/features/detailThreadSlice";
import { RootState } from "../redux/store";
import { postReply } from "../services/reply.services";
import { timeAgo } from "../utils/timeConverter";
import { postLike } from "../services/like.services";

export default function DetailThread() {
    const thread = useSelector((state: RootState) => state.detailThread.data);
    const userLogin = useSelector((state: RootState) => state.userLogin.data);
    const {
        state: { threadId, isLiked },
    } = useLocation();
    const [like, setLike] = useState(isLiked);
    const [countLike, setCountLike] = useState<number>(thread.likes_count);
    const [postImg, setPostImg] = useState<string>();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchThreadData() {
            const dataThread = await getThreadById(Number(threadId));
            dispatch(GET_DETAIL_THREAD(dataThread));
        }
        fetchThreadData();
    }, [dispatch, threadId]);

    async function handleLike() {
        const itemStr = localStorage.getItem("item");
        if (!itemStr) {
            return navigate("/login");
        }
        const item = JSON.parse(itemStr!);

        if (new Date().getTime() > item.expiry) {
            localStorage.removeItem("item");
            navigate("/login");
        }

        await postLike(threadId, item.token);
        setLike(!like);
        like ? setCountLike(countLike - 1) : setCountLike(countLike + 1);

        const dataThread = await getThreadById(Number(threadId));
        dispatch(GET_DETAIL_THREAD(dataThread));
        console.log("success dispatch thread after like");
    }

    async function handlePostReply(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const content = e.currentTarget.content.value;
        const image = e.currentTarget.image.files[0];

        const dataReply = { content, image, threadId };
        const itemStr = localStorage.getItem("item");
        if (!itemStr) {
            return navigate("/login");
        }
        const item = JSON.parse(itemStr!);

        if (new Date().getTime() > item.expiry) {
            localStorage.removeItem("item");
            navigate("/login");
        }

        if (item.token) {
            const res = await postReply(item.token, dataReply);
            console.log("res postReply:", res);
            if (res.statusText == "Unauthorized" || res.status == 401) {
                localStorage.removeItem("item");
                navigate("/login");
            }
            console.log("success post reply");
            const dataThread = await getThreadById(Number(threadId));
            dispatch(GET_DETAIL_THREAD(dataThread));
            console.log("success dispatch thread after reply");
        }
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
                <Flex bg={"whitesmoke"} shadow="lg" mt={6} borderRadius={"lg"}>
                    <Card w="2xl">
                        <CardHeader background={"whitesmoke"} py={3}>
                            <Flex>
                                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                                    <Avatar src={thread.user.image} name={thread?.user.full_name} />

                                    <Box>
                                        <Heading size="sm">{thread?.user.full_name}</Heading>
                                    </Box>
                                    <Text>@{thread?.user.username}</Text>
                                    <Text>{timeAgo(thread?.created_at)}</Text>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>{thread?.content}</Text>
                            {thread.image && <Image src={thread.image} objectFit="cover" w={"100%"} mt={3} />}
                        </CardBody>

                        <CardFooter
                            justify="space-between"
                            flexWrap="wrap"
                            sx={{
                                "& > button": {
                                    minW: "136px",
                                },
                            }}
                        >
                            <Flex flex="1" alignItems={"center"} onClick={handleLike}>
                                <Button flex="1" variant="ghost" leftIcon={like ? <GoHeartFill size={25} color="red" /> : <GoHeart size={25} color="black" />}>
                                    <Text>{thread?.likes_count} Likes</Text>
                                </Button>
                            </Flex>
                            <Flex flex="1">
                                <Button flex="1" variant="ghost" leftIcon={<HiOutlineChatBubbleBottomCenterText size={25} />}>
                                    <Text>{thread?.replies_count} Replies</Text>
                                </Button>
                            </Flex>
                            {/* <Button flex="1" variant="ghost" leftIcon={isLike ? <GoHeartFill size={25} color="red" /> : <GoHeart size={25} color="black" />}>
                        Share
                    </Button> */}
                        </CardFooter>
                    </Card>
                </Flex>

                {/* INPUT REPLY */}
                <form onSubmit={handlePostReply}>
                    <HStack spacing={4} mt={5} mb={10}>
                        <Avatar src={userLogin.image} name={userLogin.full_name} size={"sm"} />
                        <Input name="content" type="text" placeholder="Type your reply here..." border={"none"} />
                        <Box className="input-image">
                            <Box as={"label"} htmlFor="input-img">
                                <RiImageAddLine size={"30"} color="darkGreen" />
                            </Box>
                            <input name="image" type="file" id="input-img" style={{ display: "none" }} onChange={(e) => setPostImg(URL.createObjectURL(e.target.files![0]))} />
                        </Box>
                        <Button colorScheme="whatsapp" size="sm" type="submit">
                            Reply
                        </Button>
                    </HStack>
                    {postImg && <Image objectFit={"cover"} ml={20} mt={5} w={200} h={200} src={postImg}></Image>}
                </form>

                {/* CARD LIST REPLY */}
                {thread?.replies &&
                    thread.replies.map((reply) => (
                        <Flex bg={"whitesmoke"} p={5} w={"100%"} gap={4} mt={2} borderRadius={"lg"} key={reply.id}>
                            <Avatar src={reply.user.image} name={reply.user.full_name} size={"sm"} />

                            <Flex flexDir={"column"} gap={2}>
                                <Flex gap={4} alignItems={"center"}>
                                    <Heading as={"h5"} size={"sm"}>
                                        {reply.user.full_name}
                                    </Heading>
                                    <HStack>
                                        <Link to={"/username"}>
                                            <Text fontWeight={"light"}>@{reply.user.username}</Text>
                                        </Link>
                                        <Text> • {timeAgo(new Date(reply.created_at).toDateString())}</Text>
                                    </HStack>
                                </Flex>
                                <Text>{reply?.content}</Text>
                                {/* Image for replies */}
                                {reply.image && <Image src={reply.image} objectFit={"cover"} boxSize="xs" my={5} w={300} h={200} />}

                                {/* Like and replies reply-content */}
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
