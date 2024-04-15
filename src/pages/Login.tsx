import { Box, Button, FormControl, Heading, Input, InputGroup, InputRightElement, Text, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { authLogin } from "../services/user.services";
import { useEffect, useState } from "react";

const Login = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    useEffect(() => {
        localStorage.removeItem("item");
    }, []);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        const dataLogin = { username, password };

        const res = await authLogin(dataLogin);
        if (!res.token && res.response.status == 400) {
            return toast({
                title: res.response.data.message,
                description: "Cannot login",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
        const item = {
            token: res.token,
            userId: res.user.id,
            expiry: new Date().getTime() + 60 * 60 * 1000 * 3,
        };
        localStorage.setItem("item", JSON.stringify(item));

        toast({
            title: "Login success.",
            description: "Welcome back to your account.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        navigate("/", { replace: true });

        // };
        // login();
        // // const login = async () => {
        // const res = await authLogin(dataLogin, (status, token) => {
        //     console.log("res:", res);
        //     console.log("status:", status);
        //     if (status == 200) {
        //         const item = {
        //             token: token,
        //             // userId: res.user.id,
        //             expiry: new Date().getTime() + 60 * 60 * 1000 * 3,
        //         };
        //         localStorage.setItem("item", JSON.stringify(item));

        //         toast({
        //             title: "Login success.",
        //             description: "Welcome back to your account.",
        //             status: "success",
        //             duration: 3000,
        //             isClosable: true,
        //         });

        //         navigate("/", { replace: true });
        //         // localStorage.setItem("userId", res.user.id);
        //     }
        // });
        // // };
        // // login();
    };

    return (
        <Box bg={"whitesmoke"} w={"lg"} mx={"auto"} mt={20} px={20} py={10}>
            <Heading mb={5} textAlign={"center"} color="lime">
                Galaxy
            </Heading>
            <Heading as={"h3"} size={"md"} mb={4}>
                Login to your account!
            </Heading>
            <form onSubmit={handleLogin}>
                <FormControl display={"flex"} flexDir={"column"} gap={6}>
                    <Input placeholder="Username" name="username" id="username" />

                    <InputGroup size="md">
                        <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" name="password" id="password" />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button colorScheme="whatsapp" variant="solid" w={"full"} type="submit">
                        Login
                    </Button>
                </FormControl>
            </form>

            <Box>
                Don't have an account?{" "}
                <Link to={"/register"}>
                    <Text display={"inline-block"} color={"green"} fontWeight={"bold"} mt={4}>
                        Register
                    </Text>
                </Link>
            </Box>
        </Box>
    );
};

export default Login;
