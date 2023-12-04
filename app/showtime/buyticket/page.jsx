import React from "react";

const pages = () => {
    const rows = ["A", "B", "C", "D", "E", "F", "G"];
    const seatNumber = [];
    for (let i = 0; i < 21; i++) {
        seatNumber.push(i + 1);
    }
    return (
        <div className="text-black h-[80vh] flex flex-col justify-center mt-8">
            <div className="flex gap-10 justify-center ">
                <div className="flex gap-2 ">
                    <div className="h-[20px] w-[16px] bg-gradient-to-b from-green-300 to-green-700 rounded"></div>
                    <div>Available</div>
                </div>
                <div className="flex gap-2">
                    <div className="h-[20px] w-[16px] bg-gradient-to-b from-red-300 to-red-700  rounded"></div>
                    <div>Booked</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-center mt-12 cursor-pointer ">
                {rows.map((row) => {
                    return (
                        <div className="flex gap-4 justify-center ">
                            <div className="w-[9px] ">{row}</div>
                            <div className="flex gap-2 justify-center">
                                {seatNumber.map((number) => {
                                    return (
                                        <div
                                            key={number}
                                            className="h-[30px] w-[18px]  bg-gradient-to-b from-green-300 to-green-700 hover:bg-gradient-to-t rounded transition-all duration-150 ease-out hover:ease-in "
                                        ></div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div
                className="bg-[#053B50] flex justify-center  text-white w-[60vw]  m-auto rounded-b-2xl"
                style={{
                    boxShadow: "0px -7px 7px grey",
                }}
            >
                Screen This Side
            </div>
        </div>
    );
};

export default pages;
