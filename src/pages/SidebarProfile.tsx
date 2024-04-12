import { Avatar, Button, Flex, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { getAllUsers, getLoginUser, getSuggestUser } from "../services/user.services";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_USER } from "../redux/features/allUserSlice";
import { RootState } from "../redux/store";
import CardSuggestUser from "../component/cardSuggestUser";
import { GET_LOGIN_USER } from "../redux/features/userLoginSlice";
import { useNavigate } from "react-router-dom";
import { ISuggestUser } from "../interface/suggestUser";

const SidebarProfile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const userLogin = useSelector((state: RootState) => state.userLogin.data);
    const [suggestUsers, setSuggestUsers] = useState<null | ISuggestUser[]>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const itemStr = localStorage.getItem("item");
        if (!itemStr) {
            return navigate("/login");
        }
        const item = JSON.parse(itemStr!);
        // if (item.expiry == null) navigate("/login");

        window.scrollTo(0, 0);

        async function fetchData() {
            // const itemStr = localStorage.getItem("item");
            // const item = JSON.parse(itemStr!);

            // if (new Date().getTime() > item.expiry) {
            //     localStorage.removeItem("item");
            //     navigate("/login");
            // }

            // if (token) {
            const allSuggestUser = await getSuggestUser(item.token);

            // if (allSuggestUser.status == 401) {
            //     localStorage.removeItem("item");
            //     navigate("/login");
            // }

            setSuggestUsers(allSuggestUser);
            // }
            const userData = await getLoginUser(Number(item.userId));
            dispatch(GET_LOGIN_USER(userData));

            const allUser = await getAllUsers();
            dispatch(GET_ALL_USER(allUser));
        }
        fetchData();
    }, [dispatch, navigate]);

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    // useEffect(() => {
    //     async function fetchData() {
    //         // const itemStr = localStorage.getItem("item");
    //         // const item = JSON.parse(itemStr!);
    //         // const id = localStorage.getItem("userId");
    //         const userData = await getLoginUser(Number(item.userId));
    //         dispatch(GET_LOGIN_USER(userData));

    //         const allUser = await getAllUsers();
    //         dispatch(GET_ALL_USER(allUser));
    //     }
    //     fetchData();
    // }, [dispatch]);

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

            <Flex position={"sticky"} top={"0"} p={10} flexDir={"column"} gap={5}>
                <Flex backgroundImage={"linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"} color={"black"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4}>
                    <Heading as={"h3"} size={"md"}>
                        My Profile
                    </Heading>
                    <Image src={userLogin?.image ? userLogin?.image : ""} fallbackSrc="https://via.placeholder.com/150" objectFit={"cover"} alt="Profile" borderRadius="lg" height={"100"} width={"100%"} />

                    <Flex justifyContent={"space-between"}>
                        <Avatar src={userLogin?.image ? userLogin?.image : ""} objectFit={"cover"} size={"lg"} mt={"-12"} ml={4} border={"3px solid white"} />
                        <Button size={"xs"} rounded={"md"} colorScheme="gray" onClick={onOpen}>
                            Edit Profile
                        </Button>
                    </Flex>
                    <Heading size="md">
                        {userLogin?.full_name} 👀
                        <Text fontSize={"sm"} color={"grey"} textColor={"gray"} fontWeight="light">
                            @ {userLogin?.username}
                        </Text>
                    </Heading>

                    <Text fontSize={"sm"}>{userLogin?.bio}</Text>
                    <Flex gap={4} fontSize={"sm"}>
                        <Text>{userLogin?.following_count} followings</Text>
                        <Text>{userLogin?.follower_count} followers</Text>
                    </Flex>
                </Flex>

                {/* LIST SUGGESTED USER CARD */}
                {/* <Flex color={"black"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4} bg={"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(133,253,45,1) 100%)"}> */}
                <Flex color={"black"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4} backgroundImage={"linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"}>
                    <Heading as={"h3"} size={"md"}>
                        Suggested For You
                    </Heading>

                    {suggestUsers && suggestUsers.map((user) => <CardSuggestUser key={user.id} id={user.id} bio={user.bio} username={user.username} full_name={user.full_name} image={user.image} />)}
                </Flex>

                {/* FOOTER PROFILE */}
                <Flex color={"black"} w={"full"} borderRadius={"5"} flexDir={"column"} p={5} gap={4} backgroundImage={"linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"}>
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
export default SidebarProfile;
