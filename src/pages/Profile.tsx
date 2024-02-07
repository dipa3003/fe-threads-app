import { Avatar, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Profile = () => {
    return (
        <>
            <Flex bg={"#1d1d1d"} w={"30%"} p={10} position={"absolute"} right={0} flexDir={"column"} gap={5}>
                <Flex bg={"#262626"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4}>
                    <Heading as={"h3"} size={"md"}>
                        My Profile
                    </Heading>
                    <Image src="/img/paslon.jpg" alt="Profile" borderRadius="lg" height={"100"} width={"100%"} />

                    <Flex justifyContent={"space-between"}>
                        <Avatar src="/img/paslon.jpg" size={"lg"} mt={"-12"} ml={4} />
                        <Button size={"xs"} rounded={"xl"}>
                            Edit Profile
                        </Button>
                    </Flex>
                    <Heading size="md">Stella Audhina</Heading>
                    <Text fontSize={"sm"}>Pick over by the worm and weird fishes</Text>
                    <Flex gap={4} fontSize={"sm"}>
                        <Text>985 following</Text>
                        <Text>890 following</Text>
                    </Flex>
                </Flex>
                <Flex bg={"#262626"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4}>
                    <Heading as={"h3"} size={"md"}>
                        Suggested For You
                    </Heading>
                    <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex gap={3} alignItems={"center"}>
                            <Avatar src="/img/paslon.jpg" size={"sm"} />
                            <Flex flexDir={"column"}>
                                <Text fontSize={"sm"}>Jenifer Stewart</Text>
                                <Text color={"grey"} fontSize={"xs"}>
                                    @jenniferr
                                </Text>
                            </Flex>
                        </Flex>

                        <Button size={"xs"} rounded={"xl"} bg={"grey"} color={"white"} opacity={"40%"}>
                            Following
                        </Button>
                    </Flex>
                    <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex gap={3} alignItems={"center"}>
                            <Avatar src="/img/paslon.jpg" size={"sm"} />
                            <Flex flexDir={"column"}>
                                <Text fontSize={"sm"}>Jenifer Stewart</Text>
                                <Text color={"grey"} fontSize={"xs"}>
                                    @jenniferr
                                </Text>
                            </Flex>
                        </Flex>

                        <Button size={"xs"} rounded={"xl"}>
                            Follow
                        </Button>
                    </Flex>
                    <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex gap={3} alignItems={"center"}>
                            <Avatar src="/img/paslon.jpg" size={"sm"} />
                            <Flex flexDir={"column"}>
                                <Text fontSize={"sm"}>Jenifer Stewart</Text>
                                <Text color={"grey"} fontSize={"xs"}>
                                    @jenniferr
                                </Text>
                            </Flex>
                        </Flex>

                        <Button size={"xs"} rounded={"xl"}>
                            Follow
                        </Button>
                    </Flex>
                    <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex gap={3} alignItems={"center"}>
                            <Avatar src="/img/paslon.jpg" size={"sm"} />
                            <Flex flexDir={"column"}>
                                <Text fontSize={"sm"}>Jenifer Stewart</Text>
                                <Text color={"grey"} fontSize={"xs"}>
                                    @jenniferr
                                </Text>
                            </Flex>
                        </Flex>

                        <Button size={"xs"} rounded={"xl"}>
                            Follow
                        </Button>
                    </Flex>
                </Flex>
                <Flex bg={"#262626"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4}>
                    <Heading as={"h3"} size={"sm"}>
                        <Flex gap={3}>
                            Develop by Dipa Galatian . <FaGithub /> <FaLinkedin /> <FaFacebook /> <FaInstagram />
                        </Flex>
                    </Heading>
                    <Text fontSize={"sm"} opacity={"40%"}>
                        Powered by Dumbways Indonesia . #1 Coding Bootcamp
                    </Text>
                </Flex>
            </Flex>
        </>
    );
};
export default Profile;
