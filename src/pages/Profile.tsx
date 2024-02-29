import { Avatar, Button, Flex, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { getAllUsers, getLoginUser } from "../services/user.services";
import { IUser } from "../interface/threads";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_USER } from "../redux/features/allUserSlice";
import { RootState } from "../redux/store";
import CardSuggestUser from "../component/cardSuggestUser";

const Profile = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const suggestUser = useSelector((state: RootState) => state.allUser.data);

    const suggestUserToFollow = suggestUser.filter((value) => value.id !== user?.id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        async function fetchData() {
            const id = localStorage.getItem("userId");
            const userData = await getLoginUser(Number(id));
            setUser(userData);

            const allUser = await getAllUsers();
            dispatch(GET_ALL_USER(allUser));
        }
        fetchData();
    }, [dispatch]);

    // const handleFollowUser = () => {
    //     alert("you follow a user");
    // };

    return (
        <>
            {/* MODAL EDIT PROFILE */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input type="text" placeholder="Username" />
                        <Input type="text" placeholder="Bio" />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Flex position={"sticky"} top={"0"} bg={"white"} p={10} flexDir={"column"} gap={5}>
                <Flex bg={"whitesmoke"} color={"black"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4}>
                    <Heading as={"h3"} size={"md"}>
                        My Profile
                    </Heading>
                    <Image src={user?.image ? user?.image : ""} fallbackSrc="https://via.placeholder.com/150" objectFit={"cover"} alt="Profile" borderRadius="lg" height={"100"} width={"100%"} />

                    <Flex justifyContent={"space-between"}>
                        <Avatar src={user?.image ? user?.image : ""} objectFit={"cover"} size={"lg"} mt={"-12"} ml={4} />
                        <Button size={"xs"} rounded={"xl"} colorScheme="gray" onClick={onOpen}>
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
                        <Text>{user?.following_count} following</Text>
                        <Text>{user?.follower_count} followers</Text>
                    </Flex>
                </Flex>

                {/* LIST SUGGESTED USER CARD */}
                <Flex bg={"whitesmoke"} color={"black"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4}>
                    <Heading as={"h3"} size={"md"}>
                        Suggested For You
                    </Heading>

                    {suggestUserToFollow.map((user) => (
                        <CardSuggestUser key={user.id} id={user.id} bio={user.bio} username={user.username} full_name={user.full_name} image={user.image} following_count={user.following_count} follower_count={user.follower_count} />
                    ))}
                </Flex>

                {/* FOOTER PROFILE */}
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
