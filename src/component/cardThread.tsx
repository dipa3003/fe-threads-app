import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { IThreads } from "../interface/threads";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLike } from "../services/like.services";
import { timeAgo } from "../utils/timeConverter";
import { getThreads } from "../services/thread.services";
import { GET_THREADS } from "../redux/features/threadSlice";
import { useDispatch } from "react-redux";

const CardThread = (Props: IThreads) => {
    const [isLike, setIsLike] = useState(Props.isLiked);
    const [countLike, setCountLike] = useState<number>(Props.likes_count);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleLike() {
        try {
            const threadId = Props.id;
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
            setIsLike((prev) => !prev);
            isLike ? setCountLike(countLike - 1) : setCountLike(countLike + 1);

            const threadsData = await getThreads(Number(item.userId));
            dispatch(GET_THREADS(threadsData));
        } catch (error) {
            console.log("error while post like", error);
            return error;
        }
    }

    const displayThreadCard = (id: number, isLiked: boolean) => {
        navigate("/detail-thread", { state: { threadId: id, isLiked } });
    };

    return (
        <Flex bg={"whitesmoke"} shadow="lg" mt={6} borderRadius={"lg"} key={Props.id}>
            <Card w="2xl">
                <CardHeader background={"whitesmoke"} py={3}>
                    <Flex>
                        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                            <Avatar src={Props.user.image} name={Props.user.full_name} />

                            <Box>
                                <Heading size="sm">{Props.user.full_name}</Heading>
                            </Box>
                            <Text>@{Props.user.username}</Text>
                            <Text>{timeAgo(Props.created_at)}</Text>
                        </Flex>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Text mb="4">{Props.content}</Text>
                    {Props.image && <Image src={Props.image} objectFit="cover" w={"80%"} mt={3} m={"auto"} />}
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
                        <Button flex="1" variant="ghost" leftIcon={isLike ? <GoHeartFill size={25} color="red" /> : <GoHeart size={25} color="black" />}>
                            <Text>{countLike} Likes</Text>
                        </Button>
                    </Flex>
                    <Flex flex="1" onClick={() => displayThreadCard(Props.id, Props.isLiked)}>
                        <Button flex="1" variant="ghost" leftIcon={<HiOutlineChatBubbleBottomCenterText size={25} />}>
                            <Text>{Props.replies_count} Replies</Text>
                        </Button>
                    </Flex>
                    {/* <Button flex="1" variant="ghost" leftIcon={isLike ? <GoHeartFill size={25} color="red" /> : <GoHeart size={25} color="black" />}>
                        Share
                    </Button> */}
                </CardFooter>
            </Card>
        </Flex>
    );
};
export default CardThread;
