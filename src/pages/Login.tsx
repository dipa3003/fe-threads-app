import { Box, Button, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { authLogin } from "../services/user.services";

const Login = () => {
    const navigate = useNavigate();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        const dataLogin = { username, password };
        console.log("dataLogin:", dataLogin);

        const login = async () => {
            const res = await authLogin(dataLogin, (status, token) => {
                if (status === 200) {
                    localStorage.setItem("token", token);
                    navigate("/", { replace: true });
                }
                console.log("status:", status);
            });
            localStorage.setItem("userId", res.user.id);
            console.log("login_res", res);
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
                    <Input placeholder="Username" name="username" />
                    <Input placeholder="Password" name="password" />
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
