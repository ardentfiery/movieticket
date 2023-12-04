import React from "react";
import Link from "next/link";

const Navbar = () => {
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
                <div>Log in Register</div>
            </div>
        </div>
    );
};

export default Navbar;
