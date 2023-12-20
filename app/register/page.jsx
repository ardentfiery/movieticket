"use client";
import verifyUser from "../../utilis/Verifyuser";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import {
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Button,
} from "@chakra-ui/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const page = () => {
    const router = useRouter();

    const [isLoading, setisLoading] = useState(true);

    const getOtp = async () => {
        try {
            await axios.post("http://172.16.1.161:5000/sendotp", {
                email: takeValues.email,
            });
            console.log("otp sent");
        } catch (error) {
            console.log(error);
        }
    };
    const registered = async () => {
        try {
            await axios.post("http://172.16.1.161:5000/register", takeValues);
            console.log("user regsitered");
        } catch (error) {
            console.log(error);
        }
    };
    const [show, setShow] = useState(false);
    const [takeValues, settakeValues] = useState({
        firstName: "",
        lastName: "",
        email: "sabinakshe0100@gmail.com",
        password: "",
        otp: "",
    });
    useEffect(() => {
        const check = async () => {
            const isVerified = await verifyUser();
            console.log(isVerified);
            if (isVerified === true) {
                router.push("/");
                setisLoading(false);
            } else {
            }
        };
        check();
    }, []);

    if (isLoading) {
        return <div>Loading.....</div>;
    }
    return (
        <div className="flex gap-y-5 flex-col w-[30vw]  mt-4 m-auto h-[80vh] ">
            {console.log(takeValues)}
            <div className="text-black flex gap-y-4 flex-col ">
                <div>
                    <div> First Name:</div>
                    <div>
                        <Input
                            onChange={(event) => {
                                settakeValues({
                                    ...takeValues,
                                    firstName: event.target.value,
                                });
                            }}
                            placeholder="Enter your name"
                            size="md"
                        />
                    </div>
                </div>
                <div>
                    <div>Last Name:</div>
                    <div>
                        <Input
                            onChange={(event) => {
                                settakeValues({
                                    ...takeValues,
                                    lastName: event.target.value,
                                });
                            }}
                            placeholder="Enter your name"
                            size="md"
                        />
                    </div>
                </div>
            </div>

            <div className="text-black">
                <div>Email:</div>
                <div>
                    <Input
                        onChange={(event) => {
                            settakeValues({
                                ...takeValues,
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
                                settakeValues({
                                    ...takeValues,
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

            <div className="flex gap-4">
                <div>
                    <Button colorScheme="blue" onClick={getOtp}>
                        Send OTP
                    </Button>
                </div>
                <div className="text-black w-[100%]">
                    <Input
                        onChange={(event) => {
                            settakeValues({
                                ...takeValues,
                                otp: event.target.value,
                            });
                        }}
                        placeholder="Enter your OTP"
                        size="md"
                    />
                </div>
            </div>

            <div className="flex justify-center ">
                <Button
                    className="w-[100%]"
                    colorScheme="blue"
                    onClick={registered}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default page;
