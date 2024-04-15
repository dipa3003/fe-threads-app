import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RiUserSearchLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IUser } from "../interface/user";
import { getFollows, postFollow } from "../services/follow.services";
import { useNavigate } from "react-router-dom";
import { GET_FOLLOWINGS } from "../redux/features/followingSlice";
import { getLoginUser } from "../services/user.services";
import { GET_LOGIN_USER } from "../redux/features/userLoginSlice";

const Search = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [findUser, setFindUser] = useState<IUser | null>(null);
    const users = useSelector((state: RootState) => state.allUser.data);
    const followings = useSelector((state: RootState) => state.following.data);
    const [isFollow, setIsFollow] = useState(false);

    useEffect(() => {
        async function fetchFollow() {
            const itemStr = localStorage.getItem("item");
            if (!itemStr) {
                return navigate("/login");
            }
            const item = JSON.parse(itemStr!);

            if (new Date().getTime() > item.expiry) {
                localStorage.removeItem("item");
                navigate("/login");
            }

            const response = await getFollows(Number(item.userId));
            dispatch(GET_FOLLOWINGS(response.following));
        }
        fetchFollow();
    }, [dispatch, navigate]);

    const handleSearchUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userInput = e.currentTarget.username.value;

        const matchUser = users.find((value) => value.username == userInput);

        const listFollowings: string[] = [];
        followings.forEach((el) => listFollowings.push(el.follower.username));

        if (matchUser === undefined) {
            return toast({
                title: "Not Found User",
                description: "Make sure to input correct username.",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
            });
        }
        if (matchUser) {
            if (listFollowings.includes(matchUser.username)) {
                setIsFollow(true);
            } else {
                setIsFollow(false);
            }
            setFindUser(matchUser);
        }
    };

    const handleIsFollow = async (id: number) => {
        const itemStr = localStorage.getItem("item");
        if (!itemStr) {
            return navigate("/login");
        }
        const item = JSON.parse(itemStr!);
        setIsFollow((prev) => !prev);

        const res = await postFollow(id, item.token);
        if (res.response.status == 401) {
            navigate("/login");
        }
        const userData = await getLoginUser(Number(item.userId));
        dispatch(GET_LOGIN_USER(userData));
    };

    return (
        <Flex w={{ base: "100%", md: "100%" }} color={"black"} border={"2px"} borderColor={"whitesmoke"} p={10} flexDir={"column"}>
            <Heading as={"h3"} size={"md"}>
                Search People
            </Heading>
            <form onSubmit={handleSearchUser}>
                <Flex mt="5">
                    <InputGroup mb={8}>
                        <InputLeftElement pointerEvents="none">
                            <RiUserSearchLine />
                        </InputLeftElement>
                        <Input type="text" name="username" placeholder="Search by username" />
                    </InputGroup>
                    <Button colorScheme="teal" size="md" px={5} type="submit">
                        Search
                    </Button>
                </Flex>
            </form>

            {/* FIND USER CARD */}
            {findUser && (
                <Box display={"flex"} gap={5} flexDir={"column"} bg="whitesmoke" p={3} borderRadius={8}>
                    <Flex gap={3} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex gap={3} alignItems={"center"}>
                            <Avatar src={findUser.image} name={findUser.full_name} size={"sm"} objectFit={"cover"} />
                            <Flex flexDir={"column"}>
                                <Text fontSize={"sm"} fontWeight={"bold"}>
                                    {findUser.full_name}
                                </Text>
                                <Text color={"grey"} fontSize={"xs"}>
                                    @{findUser.username}
                                </Text>
                            </Flex>
                        </Flex>

                        <Button size={"sm"} rounded={"xl"} colorScheme="gray" onClick={() => handleIsFollow(findUser.id)}>
                            {isFollow ? "Following" : "Follow"}
                        </Button>
                    </Flex>
                </Box>
            )}
        </Flex>
    );
};

export default Search;
