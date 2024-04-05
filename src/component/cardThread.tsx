import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { IThreads } from "../interface/threads";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLike } from "../services/like.services";
import { timeAgo } from "../utils/timeConverter";

const CardThread = (Props: IThreads) => {
    const navigate = useNavigate();

    const [isLike, setIsLike] = useState(Props.isLiked);
    const [countLike, setCountLike] = useState<number>(Props.likes_count);

    async function handleLike() {
        try {
            const token = localStorage.getItem("token");
            const threadId = Props.id;

            if (token) {
                await postLike(threadId, token);
                setIsLike(!isLike);
                isLike ? setCountLike(countLike - 1) : setCountLike(countLike + 1);
            } else {
                navigate("/login");
            }
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
                    <Text>{Props.content}</Text>
                    {Props.image && <Image src={Props.image} objectFit="cover" w={"100%"} mt={3} />}
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
