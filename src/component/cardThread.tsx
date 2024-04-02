import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { Avatar, Flex, HStack, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { IThreads } from "../interface/threads";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postLike } from "../services/like.services";

const CardThread = (Props: IThreads) => {
    const navigate = useNavigate();

    const [isLike, setIsLike] = useState(Props.isLiked);
    const [countLike, setCountLike] = useState<number>(Props.likes_count);

    async function handleLike() {
        try {
            const token = localStorage.getItem("token");
            const threadId = Props.id;
            console.log("threadId:", threadId);

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
        <Flex bg={"whitesmoke"} shadow={"xl"} p={10} w={"100%"} gap={4} mt={8} borderRadius={"lg"} key={Props.id}>
            <Avatar src={Props.user.image} name="profile" size={"sm"} />

            <Flex flexDir={"column"} gap={2}>
                <Flex gap={4} alignItems={"center"}>
                    <Heading as={"h5"} size={"sm"}>
                        {Props.user.full_name}
                    </Heading>
                    <HStack>
                        <Link to={"/username"}>
                            <Text fontWeight={"light"}>@{Props.user.username}</Text>
                        </Link>
                        <Text> • {Props.created_at}</Text>
                    </HStack>
                </Flex>
                <Text>{Props.content}</Text>
                {Props.image && <Image src={Props.image} objectFit={"cover"} boxSize="xs" my={5} />}

                <Flex gap={10} alignItems={"center"}>
                    <Flex gap={2} alignItems={"center"}>
                        <IconButton onClick={handleLike} colorScheme="inherit" icon={isLike ? <GoHeartFill size={25} color="red" /> : <GoHeart size={25} color="black" />} aria-label={"icon"} />
                        <Text>{countLike}</Text>
                    </Flex>
                    <Flex gap={3}>
                        <HiOutlineChatBubbleBottomCenterText size={25} onClick={() => displayThreadCard(Props.id, Props.isLiked)} />
                        <Text>{Props.replies_count} Replies</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
export default CardThread;
