import { Avatar, Box, Button, Flex, HStack, Heading, IconButton, Image, Input, Text } from "@chakra-ui/react";
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

export default function DetailThread() {
    const {
        state: { threadId, isLiked },
    } = useLocation();
    const [like, setLike] = useState(isLiked);
    const [countLike, setCountLike] = useState<number>(700);
    const [clickLike, setClickLike] = useState(false);
    const [postImg, setPostImg] = useState<string>();
    const dispatch = useDispatch();
    const thread = useSelector((state: RootState) => state.detailThread.data);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        async function fetchThreadData() {
            const dataThread = await getThreadById(Number(threadId));
            dispatch(GET_DETAIL_THREAD(dataThread));
        }
        fetchThreadData();
    }, [dispatch, threadId]);

    function handleLike() {
        setLike(!like);
        setClickLike(!clickLike);
        clickLike ? setCountLike(countLike - 1) : setCountLike(countLike + 1);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function parseDate(date: any) {
        return new Date(date).toDateString();
    }
    async function handlePostReply(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const content = e.currentTarget.content.value;
        const image = e.currentTarget.image.files[0];
        console.log("image:", image);

        const dataReply = { content, image, threadId };

        const token = localStorage.getItem("token");
        if (token) {
            const res = await postReply(token, dataReply);
            if (res.statusText === "Unauthorized") {
                localStorage.removeItem("token");
                navigate("/login");
            }

            if (res.statusText === "Created" || res.status === 201) {
                window.location.reload();
            }
        } else {
            navigate("/login");
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

                {/* navigate back to home with no windows scroll to 0.0 */}
                {/* <Flex flexDir={"row"} alignItems={"center"} gap={2} color={"black"} onClick={() => navigate("/")}>
                    <IoArrowUndo />
                    <Heading as={"h3"} size={"md"}>
                        Status
                    </Heading>
                </Flex> */}

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
                <form onSubmit={handlePostReply}>
                    <HStack spacing={4} mt={5} mb={10}>
                        <Avatar src="/img/paslon.jpg" name="profile" size={"sm"} />
                        {/* <FormControl>
                        </FormControl> */}
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
                                {reply.image && <Image src={reply.image} objectFit={"cover"} boxSize="xs" my={5} />}

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
