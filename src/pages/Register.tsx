import { Box, Button, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { authRegister } from "../services/user.services";

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const full_name = e.currentTarget.fullname.value;
        const email = e.currentTarget.email.value;
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        const dataRegister = {
            full_name,
            email,
            username,
            password,
        };

        console.log("dataRegister:", dataRegister);

        const register = async () => {
            const res = await authRegister(dataRegister, (status) => {
                if (status === 201) return navigate("/login");
            });
            console.log("res.register:", res);
        };
        register();
    };

    return (
        <Box bg={"whitesmoke"} w={"lg"} mx={"auto"} mt={20} px={20} py={10}>
            <Heading mb={5} textAlign={"center"} color={"lime"}>
                LIFE
            </Heading>
            <Heading as={"h3"} size={"md"} mb={4}>
                Create your account!
            </Heading>

            <form action="" onSubmit={handleRegister}>
                <FormControl isRequired display={"flex"} flexDir={"column"} gap={6}>
                    <Input placeholder="Fullname" name="fullname" />
                    <Input placeholder="Email" name="email" />
                    <Input placeholder="Username" name="username" />
                    <Input placeholder="Password" name="password" />
                    <Button colorScheme="whatsapp" variant="solid" w={"full"} type="submit">
                        Submit
                    </Button>
                </FormControl>
            </form>

            <Text>
                Already have an account?{" "}
                <Link to={"/login"}>
                    <Text display={"inline-block"} color={"green"} fontWeight={"bold"} mt={4}>
                        Login
                    </Text>
                </Link>
            </Text>
        </Box>
    );
};

export default Register;
