import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

const page = () => {
    return (
        <div className="text-black h-[80vh]">
            <div> yah photo film ko</div>
            <div className="h-fit py-6 w-[80vw] shadow-xl shadow-[#A9A9A9] bg-[#F5F7F8] m-auto rounded">
                <div className="flex justify-between h-[10vh]">
                    <div className="text-bold text-black  ml-4">Show Time</div>
                    <div className="flex gap-5 mr-8 text-black mt-4 ">
                        <div>Today</div>
                        <div>Tomm</div>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="flex bg-yellow-700 items-center ml-2">
                        <div>
                            {" "}
                            <MapPinIcon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-white  w-20 text-center">
                            Tansen
                        </div>
                    </div>
                    <div className="bg-[#F1EFEF] w-[70vw] h-12 text-white flex px-2    items-center rounded ">
                        <div className="w-fit px-2 bg-black rounded-2xl text-center ">3:00 PM</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
