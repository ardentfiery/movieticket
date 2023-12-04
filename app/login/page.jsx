"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

const page = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="text-black">
                <div>Email:</div>
                <div>
                    <Input placeholder="Enter your name" size="md" />
                </div>
            </div>
            <div className="text-black">
                <div>Password:</div>
                <div>
                    <InputGroup size="md">
                        <Input
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
                                    class="h-6 w-6 text-black"
                                />
                            ) : (
                                <EyeIcon
                                    onClick={() => {
                                        setShow(false);
                                    }}
                                    class="h-6 w-6 text-black"
                                />
                            )}
                        </InputRightElement>
                    </InputGroup>
                </div>
            </div>
            <Button className="text-black" bg="green"  size="md">
                Log In
            </Button>
        </>
    );
};

export default page;
