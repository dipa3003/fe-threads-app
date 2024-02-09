import { Avatar, Button, Flex, FormControl, HStack, Heading, Input, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IThreads } from "../interface/threads";
import dummyThreads from "../mocks/threads.json";
import CardThread from "../component/cardThread";
import { RiImageAddLine } from "react-icons/ri";
import Profile from "./Profile";

const Home = () => {
    const [threads, setThreads] = useState<IThreads[] | null>(null);
    useEffect(() => {
        setThreads(dummyThreads);
    }, []);

    return (
        <Flex>
            <Flex bg={"white"} color={"black"} w={"60%"} border={"2px"} borderColor={"whitesmoke"} p={10} flexDir={"column"}>
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
                            <CardThread
                                key={thread.id}
                                id={thread.id}
                                name={thread.name}
                                username={thread.username}
                                created_at={thread.created_at}
                                content={thread.content}
                                image={thread.image}
                                likes={thread.likes}
                                replies={thread.replies}
                            />
                        ))}
                </VStack>
            </Flex>
            <Profile />
        </Flex>
    );
};

export default Home;
