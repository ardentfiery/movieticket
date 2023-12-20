"use client";
import verifyUser from "../../utilis/Verifyuser";
import React, { useEffect,useLayoutEffect, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { setCookie } from "cookies-next";

import { useRouter } from "next/navigation";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
// import { redirect } from "next/navigation";

const page = () => {
    const router = useRouter();
    const [isLoading,setisLoading] = useState(true)
    const [show, setShow] = useState(false);
    const [loginDetail, setloginDetail] = useState({
        email: "sabinakshe0100@gmail.com",
        password: "sabina2001",
    });
    const loggedIn = async () => {
        try {
            const response = await axios.post(
                "http://172.16.1.161:5000/login",
                loginDetail
            );
            console.log(response);
            setCookie("token", response.data.auth);
            console.log(response.data.auth);

            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const check = async () => {
            const isVerified = await verifyUser();
            console.log(isVerified);
            if (isVerified === true) {
                router.push("/")
                setisLoading(false)
            } else {
            
            }
        };
        check();
    }, []);

    if(isLoading){
        return<div>Loading.....</div>
    }

    return (
        <div className="flex flex-col gap-y-6 w-[30vw] pt-16 m-auto h-[80vh]">
            <div className="text-black">
                <div>Email:</div>
                <div>
                    <Input
                        onChange={(event) => {
                            setloginDetail({
                                ...loginDetail,
                                email: event.target.value,
                            });
                        }}
                        placeholder="Enter your email"
                        size="md"
                    />
                </div>
            </div>
            <div className="text-black">
                <div>Password:</div>
                <div>
                    <InputGroup size="md">
                        <Input
                            onChange={(event) => {
                                setloginDetail({
                                    ...loginDetail,
                                    password: event.target.value,
                                });
                            }}
                            placeholder="Enter your password"
                            type={show ? "text" : "password"}
                            size="md"
                        />
                        <InputRightElement>
                            {!show ? (
                                <EyeSlashIcon
                                    onClick={() => {
                                        setShow(true);
                                    }}
                                    className="h-6 w-6 text-black"
                                />
                            ) : (
                                <EyeIcon
                                    onClick={() => {
                                        setShow(false);
                                    }}
                                    className="h-6 w-6 text-black"
                                />
                            )}
                        </InputRightElement>
                    </InputGroup>
                </div>
            </div>
            <Button
                onClick={loggedIn}
                className="text-black"
                colorScheme="blue"
                size="md"
            >
                Log In
            </Button>
        </div>
    );
};

export default page;
