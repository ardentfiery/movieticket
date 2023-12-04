import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
       
            <ChakraProvider>
                {children}
            </ChakraProvider>
       
    );
}
