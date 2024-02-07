import { Avatar, Button, Flex, HStack, Heading, Image, Link, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoHeart, GoHome } from "react-icons/go";
import { RiLogoutCircleLine, RiUserSearchLine } from "react-icons/ri";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Flex bg="grey" color={"white"} justify={"center"} w={"100%"}>
                <Navbar />
                <Home />
                <Profile />
            </Flex>
        </>
    );
}

const Navbar = () => {
    return (
        <>
            <Flex w={"25%"} p={10} flexDir={"column"} gap={8} bgColor={"#1d1d1d"} position={"fixed"} left={0}>
                <Heading color={"lime"}>Circle</Heading>

                {/* <Link to={"/"}>
                        <HStack display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                            <GoHome />
                            <Text>Home</Text>
                        </HStack>
                    </Link>
                    <Link to={"/search"}>
                        <HStack display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                            <RiUserSearchLine />
                            <Text>Search</Text>
                        </HStack>
                    </Link>
                    <Link to={"/follows"}>
                        <HStack display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                            <GoHeart />
                            <Text>Follows</Text>
                        </HStack>
                    </Link>
                    <Link to={"/profile"}>
                        <HStack display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                            <CgProfile />
                            <Text>Profile</Text>
                        </HStack>
                    </Link> */}

                <Link href="/test" display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                    <GoHome />
                    <Text>Home</Text>
                </Link>

                <Link href="/search" display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                    <RiUserSearchLine />
                    <Text>Search</Text>
                </Link>

                <Link href="/follows" display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                    <GoHeart />
                    <Text>Follows</Text>
                </Link>

                <Link href="/profile" display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
                    <CgProfile />
                    <Text>Profile</Text>
                </Link>

                <Button colorScheme="whatsapp" variant="solid">
                    <Link href={"/post"}>
                        <HStack>
                            <Text>Create Post</Text>
                        </HStack>
                    </Link>
                </Button>

                <Link href={"/logout"}>
                    <HStack display={"flex"} flexDir={"row"} alignItems={"center"} gap={2} mt={"100%"}>
                        <RiLogoutCircleLine />
                        <Text>Logout</Text>
                    </HStack>
                </Link>
            </Flex>
        </>
    );
};

// const Home = () => {
//     return (
//         <>
//             <Flex bg={"#1d1d1d"} w={"45%"} h={"screen"} borderX={"1px"} borderColor={"slategrey"} p={10} flexDir={"column"} position={"relative"} left={-10}>
//                 <Heading as={"h3"} size={"md"}>
//                     Home
//                 </Heading>

//                 <HStack spacing={4} mt={5}>
//                     <Avatar src="/img/paslon.jpg" name="profile" size={"md"} />
//                     <FormControl>
//                         <Input type="text" placeholder="What is happening?!" border={"none"} />
//                     </FormControl>
//                     <RiImageAddLine size={"40"} color="darkGreen" />
//                     <Button colorScheme="whatsapp" size="sm">
//                         Button
//                     </Button>
//                 </HStack>

//                 <VStack>
//                     <Flex w={"100%"} gap={4} mt={8}>
//                         <Avatar src="/img/paslon.jpg" name="profile" size={"sm"} />

//                         <Flex flexDir={"column"} gap={2}>
//                             <Flex gap={4} alignItems={"center"}>
//                                 <Heading as={"h5"} size={"sm"}>
//                                     Indah Prakarya
//                                 </Heading>
//                                 <HStack>
//                                     <Link fontWeight={"light"}>@indahpra</Link>
//                                     <Text> . 4h</Text>
//                                 </HStack>
//                             </Flex>
//                             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit aut dolore ab harum veniam maxime a corporis commodi? Ipsum?</Text>

//                             <Image src="/img/paslon.jpg" objectFit={"cover"} boxSize="xs" my={5} />

//                             <Flex gap={10}>
//                                 <Flex gap={3}>
//                                     <GoHeart size={25} />
//                                     <Text>963</Text>
//                                 </Flex>
//                                 <Flex gap={3}>
//                                     <HiOutlineChatBubbleBottomCenterText size={25} />
//                                     <Text>800 Replies</Text>
//                                 </Flex>
//                             </Flex>
//                         </Flex>
//                     </Flex>
//                     <Flex w={"100%"} gap={4} mt={8}>
//                         <Avatar src="/img/paslon.jpg" name="profile" size={"sm"} />

//                         <Flex flexDir={"column"} gap={2}>
//                             <Flex gap={4}>
//                                 <Heading as={"h5"} size={"sm"}>
//                                     Indah Prakarya
//                                 </Heading>
//                                 <HStack>
//                                     <Link fontWeight={"light"}>@indahpra</Link>
//                                     <Text> . 4h</Text>
//                                 </HStack>
//                             </Flex>
//                             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit aut dolore ab harum veniam maxime a corporis commodi? Ipsum?</Text>
//                             <Flex gap={10}>
//                                 <Flex gap={3}>
//                                     <GoHeart size={25} />
//                                     <Text>963</Text>
//                                 </Flex>
//                                 <Flex gap={3}>
//                                     <HiOutlineChatBubbleBottomCenterText size={25} />
//                                     <Text>800 Replies</Text>
//                                 </Flex>
//                             </Flex>
//                         </Flex>
//                     </Flex>
//                     <Flex w={"100%"} gap={4} mt={8}>
//                         <Avatar src="/img/paslon.jpg" name="profile" size={"sm"} />

//                         <Flex flexDir={"column"} gap={2}>
//                             <Flex gap={4}>
//                                 <Heading as={"h5"} size={"sm"}>
//                                     Indah Prakarya
//                                 </Heading>
//                                 <HStack>
//                                     <Link fontWeight={"light"}>@indahpra</Link>
//                                     <Text> . 4h</Text>
//                                 </HStack>
//                             </Flex>
//                             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit aut dolore ab harum veniam maxime a corporis commodi? Ipsum?</Text>
//                             <Flex gap={10}>
//                                 <Flex gap={3}>
//                                     <GoHeart size={25} />
//                                     <Text>963</Text>
//                                 </Flex>
//                                 <Flex gap={3}>
//                                     <HiOutlineChatBubbleBottomCenterText size={25} />
//                                     <Text>800 Replies</Text>
//                                 </Flex>
//                             </Flex>
//                         </Flex>
//                     </Flex>
//                 </VStack>
//             </Flex>
//         </>
//     );
// };

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
                        <Button size={"xs"} rounded={"xl"} bg={"grey"} color={"white"} opacity={"40%"}>
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

export default App;
