import { Box, Button, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Box bg={"whitesmoke"} w={"lg"} mx={"auto"} mt={20} px={20} py={10}>
            <Heading mb={5} textAlign={"center"} color={"lime"}>
                LIFE
            </Heading>
            <Heading as={"h3"} size={"md"} mb={4}>
                Login to your account!
            </Heading>
            <FormControl isRequired display={"flex"} flexDir={"column"} gap={6}>
                {/* <FormLabel>Fullname</FormLabel> */}
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Button colorScheme="whatsapp" variant="solid" w={"full"}>
                    Login
                </Button>
            </FormControl>

            <Text>
                Don't have an account?{" "}
                <Link to={"/register"}>
                    <Text display={"inline-block"} color={"green"} fontWeight={"bold"} mt={4}>
                        Register
                    </Text>
                </Link>
            </Text>
        </Box>
    );
};

export default Login;
