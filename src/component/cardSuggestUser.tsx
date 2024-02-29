import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { IUser } from "../interface/threads";
import { postFollow } from "../services/follow.services";
import { useNavigate } from "react-router-dom";

export default function CardSuggestUser(Props: IUser) {
    const navigate = useNavigate();

    const handleFollowUser = async (id: number) => {
        const token = localStorage.getItem("token");

        if (token) {
            const resp = await postFollow(id, token);
            console.log("response postfollow:", resp);
            if (resp.response.status == 401) {
                navigate("/login");
            }
            navigate(0);
        } else {
            navigate("/login");
        }
    };

    return (
        <Flex gap={3} alignItems={"center"} justifyContent={"space-between"} key={Props.id}>
            <Flex gap={3} alignItems={"center"}>
                <Avatar src="/img/paslon.jpg" size={"sm"} />
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
                Follow
            </Button>
        </Flex>
    );
}
