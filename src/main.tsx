import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//     },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
            {/* <RouterProvider router={router} /> */}
        </ChakraProvider>
    </React.StrictMode>
);
