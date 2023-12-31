import { Jost } from "next/font/google";
import "./globals.css";
import Footer from "./components/homepage/Footer";
import Navbar from "./components/homepage/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ChakraProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </ChakraProvider>
            </body>
        </html>
    );
}
