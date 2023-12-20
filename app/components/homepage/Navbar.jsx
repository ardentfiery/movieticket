"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCookie , deleteCookie} from "cookies-next";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import verifyUser from "../../../utilis/Verifyuser";

const Navbar = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const logOut =()=>{
        setisLoggedIn(false)
        deleteCookie("token")

    }

    
    useEffect(() => {
        const check = async()=>{

            const isVerified = await verifyUser()
            console.log(isVerified)
            if(isVerified===true){
             setisLoggedIn(true)
            }else{
             setisLoggedIn(false)
            }
        }
        check()
       
    }, []);
    return (
        <div>
            <div className="flex justify-around bg-white text-black h-14 items-center">
                <div className="icon">logo</div>
                <div className="flex bg-white text-black gap-12 ">
                    <Link href="/">
                        {" "}
                        <div>Home</div>
                    </Link>
                    <Link href="/ticketrate">
                        <div>Ticket Rate</div>
                    </Link>

                    <div>Gallery</div>
                    <Link href="/contactus">
                        <div>Contact Us</div>
                    </Link>
                </div>
                <div className="flex gap-4">
                    {!isLoggedIn ? (
                        <>
                            {" "}
                            <div>
                                <Link href="/login">Log In</Link>{" "}
                            </div>
                            <div>
                                <Link href="/register">Register</Link>
                            </div>
                        </>
                    ) : (
                        <button onClick={logOut}>Log Out</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
