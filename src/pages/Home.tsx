import { Avatar, Button, Flex, FormControl, HStack, Heading, Image, Input, Link, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { RiImageAddLine } from "react-icons/ri";
import { IThreads } from "../interface/threads";
import dummyThreads from "../mocks/threads.json";

const Home = () => {
    const [threads, setThreads] = useState<IThreads[] | null>(null);
    useEffect(() => {
        setThreads(dummyThreads);
    }, []);
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
                            <Flex w={"100%"} gap={4} mt={8} key={thread.id}>
                                <Avatar src="/img/paslon.jpg" name="profile" size={"sm"} />

                                <Flex flexDir={"column"} gap={2}>
                                    <Flex gap={4} alignItems={"center"}>
                                        <Heading as={"h5"} size={"sm"}>
                                            {thread.name}
                                        </Heading>
                                        <HStack>
                                            <Link fontWeight={"light"}>@{thread.username}</Link>
                                            <Text> . {thread.created_at}</Text>
                                        </HStack>
                                    </Flex>
                                    <Text>{thread.content}</Text>
                                    {thread.image && <Image src={thread.image} objectFit={"cover"} boxSize="xs" my={5} />}

                                    <Flex gap={10}>
                                        <Flex gap={3}>
                                            <GoHeart size={25} />
                                            <Text>{thread.likes}</Text>
                                        </Flex>
                                        <Flex gap={3}>
                                            <HiOutlineChatBubbleBottomCenterText size={25} />
                                            <Text>{thread.replies} Replies</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        ))}
                    {/* <Flex w={"100%"} gap={4} mt={8}>
                        <Avatar src="/img/paslon.jpg" name="profile" size={"sm"} />

                        <Flex flexDir={"column"} gap={2}>
                            <Flex gap={4}>
                                <Heading as={"h5"} size={"sm"}>
                                    Indah Prakarya
                                </Heading>
                                <HStack>
                                    <Link fontWeight={"light"}>@indahpra</Link>
                                    <Text> . 4h</Text>
                                </HStack>
                            </Flex>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit aut dolore ab harum veniam maxime a corporis commodi? Ipsum?</Text>
                            <Flex gap={10}>
                                <Flex gap={3}>
                                    <GoHeart size={25} />
                                    <Text>963</Text>
                                </Flex>
                                <Flex gap={3}>
                                    <HiOutlineChatBubbleBottomCenterText size={25} />
                                    <Text>800 Replies</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex w={"100%"} gap={4} mt={8}>
                        <Avatar src="/img/paslon.jpg" name="profile" size={"sm"} />

                        <Flex flexDir={"column"} gap={2}>
                            <Flex gap={4}>
                                <Heading as={"h5"} size={"sm"}>
                                    Indah Prakarya
                                </Heading>
                                <HStack>
                                    <Link fontWeight={"light"}>@indahpra</Link>
                                    <Text> . 4h</Text>
                                </HStack>
                            </Flex>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit aut dolore ab harum veniam maxime a corporis commodi? Ipsum?</Text>
                            <Flex gap={10}>
                                <Flex gap={3}>
                                    <GoHeart size={25} />
                                    <Text>963</Text>
                                </Flex>
                                <Flex gap={3}>
                                    <HiOutlineChatBubbleBottomCenterText size={25} />
                                    <Text>800 Replies</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex> */}
                </VStack>
            </Flex>
        </>
    );
};

export default Home;
