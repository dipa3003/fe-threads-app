import { Avatar, Button, Flex, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getLoginUser, updateProfile } from "../services/user.services";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { GET_LOGIN_USER } from "../redux/features/userLoginSlice";
import { getThreadsByUser } from "../services/thread.services";
import { IThreads } from "../interface/threads";
import CardThread from "../component/cardThread";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const userLogin = useSelector((state: RootState) => state.userLogin.data);
    const [threads, setThreads] = useState<null | IThreads[]>(null);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        const itemStr = localStorage.getItem("item");
        if (!itemStr) {
            return navigate("/login");
        }
        const item = JSON.parse(itemStr!);

        if (new Date().getTime() > item.expiry) {
            localStorage.removeItem("item");
            navigate("/login");
        }
        async function fetchData() {
            const userData = await getLoginUser(Number(item.userId));
            dispatch(GET_LOGIN_USER(userData));

            const threadsByUserLogin = await getThreadsByUser(Number(item.userId));
            setThreads(threadsByUserLogin);
        }
        fetchData();
    }, [dispatch, navigate]);

    const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const full_name = e.currentTarget.full_name.value;
        const username = e.currentTarget.username.value;
        const bio = e.currentTarget.bio.value;
        const image = e.currentTarget.image.files[0];

        const dataUser = {
            full_name,
            username,
            bio,
            image,
        };

        const itemStr = localStorage.getItem("item");
        if (!itemStr) {
            return navigate("/login");
        }
        const item = JSON.parse(itemStr!);
        const res = await updateProfile(item.token, dataUser);
        console.log(res?.statusText);
        const userData = await getLoginUser(Number(item.userId));
        dispatch(GET_LOGIN_USER(userData));
    };

    return (
        <>
            {/* MODAL EDIT PROFILE */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <form onSubmit={handleUpdateProfile}>
                    <ModalContent>
                        <ModalHeader>Edit Profile</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody display="flex" flexDir={"column"} gap="6">
                            <Input type="text" placeholder="Fullname" name="full_name" />
                            <Input type="text" placeholder="Username" name="username" />
                            <Input type="text" placeholder="Bio" name="bio" />
                            <Input type="file" placeholder="Image" name="image" />
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" variant="ghost" mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button colorScheme="blue" type="submit">
                                Save
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>

            <Flex position={"sticky"} top={"0"} bg={"white"} p={10} flexDir={"column"} gap={5}>
                <Flex bg={"whitesmoke"} color={"black"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4}>
                    <Heading as={"h3"} size={"md"}>
                        My Profile
                    </Heading>
                    <Image
                        src={"https://img.freepik.com/free-photo/tibumana-waterfall-bali-island-indonesia_335224-356.jpg?t=st=1713162228~exp=1713165828~hmac=35c9bb6c43d5d0375a758d5576360161f3596b309f72588fbe706e403363a9ba&w=1060"}
                        fallbackSrc="https://via.placeholder.com/150"
                        objectFit={"cover"}
                        alt="Profile"
                        borderRadius="lg"
                        h={200}
                        w="100%"
                    />
                    {/* <Image src={userLogin?.image ? userLogin?.image : ""} objectFit={"cover"} alt="Profile" borderRadius="lg" h={200} w="100%" /> */}

                    <Flex justifyContent={"space-between"}>
                        <Avatar src={userLogin?.image} name={userLogin.full_name} objectFit={"cover"} size={"lg"} mt={"-12"} ml={4} border={"3px solid white"} />
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
