import { Avatar, Button, Flex, FormControl, HStack, Heading, Input, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IThreads } from "../interface/threads";
import dummyThreads from "../mocks/threads.json";
import CardThread from "../component/cardThread";
import { RiImageAddLine } from "react-icons/ri";

const Home = () => {
    const [threads, setThreads] = useState<IThreads[] | null>(null);
    // const [like, setLike] = useState(false);
    useEffect(() => {
        setThreads(dummyThreads);
    }, []);

    // function handleLike() {
    //     // alert("id clicked" + id);
    //     //logic change likes icon color from one card only (soon..)
    //     setLike(!like);
    // }

    // const iconHeartStyle = { color: "red" };

    return (
        <>
            <Flex bg={"#1d1d1d"} w={"45%"} h={"screen"} borderX={"1px"} borderColor={"slategrey"} p={10} flexDir={"column"} position={"relative"} left={-10}>
                <Heading as={"h3"} size={"md"}>
                    Home
                </Heading>

                <HStack spacing={4} mt={5}>
                    <Avatar src="/img/paslon.jpg" name="profile" size={"md"} />
                    <FormControl>
                        <Input type="text" placeholder="What is happening?!" border={"none"} />
                    </FormControl>
                    <RiImageAddLine size={"40"} color="darkGreen" />
                    <Button colorScheme="whatsapp" size="sm">
                        Button
                    </Button>
                </HStack>

                <VStack>
                    {threads &&
                        threads.map((thread) => (
                            <CardThread id={thread.id} name={thread.name} username={thread.username} created_at={thread.created_at} content={thread.content} image={thread.image} likes={thread.likes} replies={thread.replies} />
                            // <Flex w={"100%"} gap={4} mt={8} key={thread.id}>
                            //     <Avatar src="/img/paslon.jpg" name="profile" size={"sm"} />

                            //     <Flex flexDir={"column"} gap={2}>
                            //         <Flex gap={4} alignItems={"center"}>
                            //             <Heading as={"h5"} size={"sm"}>
                            //                 {thread.name}
                            //             </Heading>
                            //             <HStack>
                            //                 <Link fontWeight={"light"}>@{thread.username}</Link>
                            //                 <Text> . {thread.created_at}</Text>
                            //             </HStack>
                            //         </Flex>
                            //         <Text>{thread.content}</Text>
                            //         {thread.image && <Image src={thread.image} objectFit={"cover"} boxSize="xs" my={5} />}

                            //         <Flex gap={10}>
                            //             <Flex gap={3}>
                            //                 <IconButton onClick={handleLike} colorScheme={like ? "red" : "inherit"} icon={like ? <GoHeartFill size={25} /> : <GoHeart size={25} />} aria-label={"icon"} />
                            //                 <Text>{thread.likes}</Text>
                            //             </Flex>
                            //             <Flex gap={3}>
                            //                 <HiOutlineChatBubbleBottomCenterText size={25} />
                            //                 <Text>{thread.replies} Replies</Text>
                            //             </Flex>
                            //         </Flex>
                            //     </Flex>
                            // </Flex>
                        ))}
                </VStack>
            </Flex>
        </>
    );
};

export default Home;
