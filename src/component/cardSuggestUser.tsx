import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { getFollows, postFollow } from "../services/follow.services";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ISuggestUser } from "../interface/suggestUser";
import { getLoginUser } from "../services/user.services";
import { GET_LOGIN_USER } from "../redux/features/userLoginSlice";
import { useDispatch } from "react-redux";
import { GET_FOLLOWINGS } from "../redux/features/followingSlice";

export default function CardSuggestUser(Props: ISuggestUser) {
    const [follow, setFollow] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFollowUser = async (id: number) => {
        const itemStr = localStorage.getItem("item");
        if (!itemStr) {
            return navigate("/login");
        }
        const item = JSON.parse(itemStr!);
        setFollow((prev) => !prev);
        const resp = await postFollow(id, item.token);
        if (resp.response.status == 401) {
            navigate("/login");
        }
        const userData = await getLoginUser(Number(item.userId));
        dispatch(GET_LOGIN_USER(userData));
        const response = await getFollows(Number(item.userId));
        dispatch(GET_FOLLOWINGS(response.following));
    };

    return (
        <Flex gap={3} alignItems={"center"} justifyContent={"space-between"} key={Props.id} border={"1px solid white"} borderRadius={"xl"} py={1} px={2}>
            <Flex gap={3} alignItems={"center"}>
                <Avatar src={Props.image} size={"sm"} />
                <Flex flexDir={"column"}>
                    <Text fontSize={"sm"} fontWeight={"bold"}>
                        {Props.full_name}
                    </Text>
                    <Text color={"grey"} fontSize={"xs"}>
                        @{Props.username}
                    </Text>
                </Flex>
            </Flex>

            <Button size={"xs"} rounded={"xl"} colorScheme="gray" onClick={() => handleFollowUser(Props.id)}>
                {follow ? "Unfollow" : "Follow"}
            </Button>
        </Flex>
    );
}
