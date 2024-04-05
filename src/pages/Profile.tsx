import { Avatar, Button, Flex, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getLoginUser } from "../services/user.services";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { GET_LOGIN_USER } from "../redux/features/userLoginSlice";
import { getThreadsByUser } from "../services/thread.services";
import { IThreads } from "../interface/threads";
import CardThread from "../component/cardThread";

const Profile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const userLogin = useSelector((state: RootState) => state.userLogin.data);
    const [threads, setThreads] = useState<null | IThreads[]>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        async function fetchData() {
            const id = localStorage.getItem("userId");
            const userData = await getLoginUser(Number(id));
            dispatch(GET_LOGIN_USER(userData));

            const threadsByUserLogin = await getThreadsByUser(Number(id));
            setThreads(threadsByUserLogin);
        }
        fetchData();
    }, [dispatch]);

    return (
        <>
            {/* MODAL EDIT PROFILE */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input type="text" placeholder="Fullname" name="full_name" />
                        <Input type="text" placeholder="Username" name="username" />
                        <Input type="text" placeholder="Bio" name="bio" />
                        <Input type="file" placeholder="Image" name="image" />
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
                    <Image src={userLogin?.image ? userLogin?.image : ""} fallbackSrc="https://via.placeholder.com/150" objectFit={"cover"} alt="Profile" borderRadius="lg" height={"150"} width={"100%"} />

                    <Flex justifyContent={"space-between"}>
                        <Avatar src={userLogin?.image ? userLogin?.image : ""} objectFit={"cover"} size={"lg"} mt={"-12"} ml={4} border={"3px solid white"} />
                        <Button size={"sm"} rounded={"md"} colorScheme="gray" onClick={onOpen}>
                            Edit Profile
                        </Button>
                    </Flex>
                    <Heading size="md">
                        {userLogin?.full_name}{" "}
                        <Text fontSize={"sm"} color={"grey"} textColor={"gray"} fontWeight="light">
                            @ {userLogin?.username}
                        </Text>
                    </Heading>

                    <Text fontSize={"sm"}>{userLogin?.bio}</Text>
                    <Flex gap={4} fontSize={"sm"}>
                        <Text>{userLogin?.following_count} following</Text>
                        <Text>{userLogin?.follower_count} followers</Text>
                    </Flex>
                </Flex>

                <VStack>
                    {threads &&
                        threads.map((thread) => (
                            <CardThread
                                key={thread.id}
                                id={thread.id}
                                user={thread.user}
                                username={thread.user.username}
                                full_name={thread.user.full_name}
                                created_at={new Date(thread.created_at).toDateString()}
                                content={thread.content}
                                image={thread.image}
                                likes_count={thread.likes_count}
                                replies_count={thread.replies_count}
                                isLiked={thread.isLiked}
                            />
                        ))}
                </VStack>
            </Flex>
        </>
    );
};
export default Profile;
