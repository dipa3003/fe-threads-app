import { Avatar, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { getLoginUser } from "../services/user.services";
import { IUser } from "../interface/threads";

const Profile = () => {
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() => {
        async function fetchData() {
            const id = localStorage.getItem("userId");
            const userData = await getLoginUser(Number(id));
            setUser(userData);
        }
        fetchData();
    }, []);
    return (
        <>
            <Flex position={"sticky"} top={"0"} bg={"white"} p={10} flexDir={"column"} gap={5}>
                <Flex bg={"whitesmoke"} color={"black"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4}>
                    <Heading as={"h3"} size={"md"}>
                        My Profile
                    </Heading>
                    <Image src="/img/paslon.jpg" alt="Profile" borderRadius="lg" height={"100"} width={"100%"} />

                    <Flex justifyContent={"space-between"}>
                        <Avatar src="/img/paslon.jpg" size={"lg"} mt={"-12"} ml={4} />
                        <Button size={"xs"} rounded={"xl"} bg={"black"} color={"white"}>
                            Edit Profile
                        </Button>
                    </Flex>
                    <Heading size="md">
                        {user?.full_name}{" "}
                        <Text fontSize={"sm"} color={"grey"} textColor={"gray"} fontWeight="light">
                            @ {user?.username}
                        </Text>
                    </Heading>

                    <Text fontSize={"sm"}>{user?.bio}</Text>
                    <Flex gap={4} fontSize={"sm"}>
                        <Text>985 following</Text>
                        <Text>890 following</Text>
                    </Flex>
                </Flex>
                <Flex bg={"whitesmoke"} color={"black"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4}>
                    <Heading as={"h3"} size={"md"}>
                        Suggested For You
                    </Heading>
                    <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex gap={3} alignItems={"center"}>
                            <Avatar src="/img/paslon.jpg" size={"sm"} />
                            <Flex flexDir={"column"}>
                                <Text fontSize={"sm"} fontWeight={"bold"}>
                                    Jenifer Stewart
                                </Text>
                                <Text color={"grey"} fontSize={"xs"}>
                                    @jenniferr
                                </Text>
                            </Flex>
                        </Flex>

                        <Button size={"xs"} rounded={"xl"} bg={"black"} color={"white"} opacity={"40%"}>
                            Following
                        </Button>
                    </Flex>
                    <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex gap={3} alignItems={"center"}>
                            <Avatar src="/img/paslon.jpg" size={"sm"} />
                            <Flex flexDir={"column"}>
                                <Text fontSize={"sm"} fontWeight={"bold"}>
                                    Jenifer Stewart
                                </Text>
                                <Text color={"grey"} fontSize={"xs"}>
                                    @jenniferr
                                </Text>
                            </Flex>
                        </Flex>

                        <Button size={"xs"} rounded={"xl"} bg={"black"} color={"white"}>
                            Follow
                        </Button>
                    </Flex>
                    <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex gap={3} alignItems={"center"}>
                            <Avatar src="/img/paslon.jpg" size={"sm"} />
                            <Flex flexDir={"column"}>
                                <Text fontSize={"sm"} fontWeight={"bold"}>
                                    Jenifer Stewart
                                </Text>
                                <Text color={"grey"} fontSize={"xs"}>
                                    @jenniferr
                                </Text>
                            </Flex>
                        </Flex>

                        <Button size={"xs"} rounded={"xl"} bg={"black"} color={"white"}>
                            Follow
                        </Button>
                    </Flex>
                    <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex gap={3} alignItems={"center"}>
                            <Avatar src="/img/paslon.jpg" size={"sm"} />
                            <Flex flexDir={"column"}>
                                <Text fontSize={"sm"} fontWeight={"bold"}>
                                    Jenifer Stewart
                                </Text>
                                <Text color={"grey"} fontSize={"xs"}>
                                    @jenniferr
                                </Text>
                            </Flex>
                        </Flex>

                        <Button size={"xs"} rounded={"xl"} bg={"black"} color={"white"}>
                            Follow
                        </Button>
                    </Flex>
                </Flex>
                <Flex bg={"whitesmoke"} color={"black"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4}>
                    <Heading as={"h3"} size={"sm"}>
                        <Flex gap={3}>
                            Develop by Dipa Galatian • <FaGithub /> <FaLinkedin /> <FaFacebook /> <FaInstagram />
                        </Flex>
                    </Heading>
                    <Text fontSize={"sm"} opacity={"40%"}>
                        Powered by Dumbways Indonesia • #1 Coding Bootcamp
                    </Text>
                </Flex>
            </Flex>
        </>
    );
};
export default Profile;
