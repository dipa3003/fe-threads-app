import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Box bg={"red.100"}>
            <Heading>Page Not Found</Heading>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, explicabo? Ipsam laudantium repellendus at qui iusto? Voluptatem, soluta porro.
                Quia!
            </p>

            <p>
                Go to <Link to={"/home"}>HomePage</Link>.
            </p>
        </Box>
    );
};
export default NotFound;
