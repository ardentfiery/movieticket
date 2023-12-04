import React from "react";
import { Input, Textarea } from "@chakra-ui/react";

const page = () => {
    return (
        <div className="text-black min-h-[80vh]">
            <div className=" w-screen mt-20">
                <h1 className="text-bold text-3xl text-slate-600 text-center">
                    Get in Touch
                </h1>
                <p className="text-center">We would love to hear from you.</p>
            </div>
            <div className=" px-6 flex justify-around">
                <div className=" flex flex-col h-[40vh] w-[40vw] m-auto mt-10 gap-6 ">
                    <div className="flex gap-8 mt-4 ">
                        <div className="ml-4">
                            <p className="text-slate-600">Name</p>
                            <Input
                                variant="outline"
                                placeholder="Enter your name"
                                className="bg-slate-100 w-96 h-12 rounded"
                            />
                        </div>
                        <div>
                            <p className="text-slate-600">Email</p>
                            <Input
                                variant="outline"
                                placeholder="Enter your email address"
                                className="bg-slate-100 w-96 h-10 rounded "
                            />
                        </div>
                    </div>

                    <div className="ml-4">
                        <p className="text-slate-600">Enter your message</p>
                        <Textarea
                            placeholder="Type your message"
                            className="bg-slate-100 w-96 h-10 rounded "
                        />
                    </div>
                    <div className="m-auto bg-slate-600 text-white py-2 px-10 rounded-2xl">
                        <button>Submit</button>
                    </div>
                </div>
                <div className="mt-10" >
                    <iframe className="ml-8"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14108.636995511299!2d83.53380016041233!3d27.86637806746529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39967ed35e46ab5b%3A0x18aefbf3b9d2b69d!2sBP%20Chowk%2C%20Tansen%2032500!5e0!3m2!1sen!2snp!4v1701665379899!5m2!1sen!2snp"
                        width="600"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
