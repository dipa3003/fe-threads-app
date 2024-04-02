import { Box, Button, FormControl, Heading, Input, InputGroup, InputRightElement, Text, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { authLogin } from "../services/user.services";
import { useState } from "react";

const Login = () => {
    const toast = useToast();
    const navigate = useNavigate();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        const dataLogin = { username, password };

        const login = async () => {
            const res = await authLogin(dataLogin, (status, token) => {
                if (status === 200) {
                    localStorage.setItem("token", token);

                    toast({
                        title: "Login success.",
                        description: "Welcome back to your account.",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });

                    navigate("/", { replace: true });
                }
            });
            localStorage.setItem("userId", res.user.id);
        };
        login();
    };

    return (
        <Box bg={"whitesmoke"} w={"lg"} mx={"auto"} mt={20} px={20} py={10}>
            <Heading mb={5} textAlign={"center"} color={"lime"}>
                LIFE
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
