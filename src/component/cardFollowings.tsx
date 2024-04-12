import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { IFollowing } from "../interface/follow";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postFollow } from "../services/follow.services";
import { getLoginUser } from "../services/user.services";
import { GET_LOGIN_USER } from "../redux/features/userLoginSlice";
import { useDispatch } from "react-redux";

export default function CardFollowings(Props: IFollowing) {
    const [unFollow, setUnFollow] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleUnfollow = async (id: number) => {
        const itemStr = localStorage.getItem("item");
        if (!itemStr) {
            return navigate("/login");
        }
        const item = JSON.parse(itemStr!);
        setUnFollow(!unFollow);

        const res = await postFollow(id, item.token);
        if (res.response.status == 401) {
            navigate("/login");
        }
        const userData = await getLoginUser(Number(item.userId));
        dispatch(GET_LOGIN_USER(userData));
    };

    return (
        <Flex gap={3} alignItems={"center"} justifyContent={"space-between"} key={Props.id}>
            <Flex gap={3} alignItems={"center"}>
                <Avatar src={Props.follower.image} size={"sm"} />
                <Flex flexDir={"column"}>
                    <Text fontSize={"sm"} fontWeight={"bold"}>
                        {Props.follower.full_name}
                    </Text>
                    <Text color={"grey"} fontSize={"xs"}>
                        @{Props.follower.username}
                    </Text>
                </Flex>
            </Flex>

            <Button size={"sm"} rounded={"xl"} colorScheme="gray" opacity={"50%"} onClick={() => handleUnfollow(Props.follower.id)}>
                {unFollow ? "Follow" : "Following"}
            </Button>
        </Flex>
    );
}
