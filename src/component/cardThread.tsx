import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { Avatar, Flex, HStack, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { IThreads } from "../interface/threads";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CardThread = (Props: IThreads) => {
    const navigate = useNavigate();

    const [like, setLike] = useState(false);
    const [countLike, setCountLike] = useState<number>(Props.likes_count);
    const [clickLike, setClickLike] = useState(false);

    function handleLike() {
        setLike(!like);
        setClickLike(!clickLike);
        clickLike ? setCountLike(countLike - 1) : setCountLike(countLike + 1);
    }

    const displayThreadCard = (id: number) => {
        navigate("/detail-thread", { state: { threadId: id } });
    };

    return (
        <Flex bg={"whitesmoke"} shadow={"xl"} p={10} w={"100%"} gap={4} mt={8} borderRadius={"lg"} key={Props.id}>
            <Avatar src="/img/paslon.jpg" name="profile" size={"sm"} />

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
                        <IconButton onClick={handleLike} colorScheme="inherit" icon={like ? <GoHeartFill size={25} color="red" /> : <GoHeart size={25} color="black" />} aria-label={"icon"} />
                        <Text>{countLike}</Text>
                    </Flex>
                    <Flex gap={3}>
                        <HiOutlineChatBubbleBottomCenterText size={25} onClick={() => displayThreadCard(Props.id)} />
                        <Text>{Props.replies_count} Replies</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
export default CardThread;
