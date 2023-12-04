import React from "react";
import {
    ArrowRightIcon,
    MapPinIcon,
    InboxStackIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
    return (
        <div className="bg-slate-200 h-56  flex flex-col justify-between p-5 text-black mt-auto w-screen">
            <div className="flex justify-around">
                <div>
                    <h1 className="font-black text-3xl">CinepalMovies</h1>
                </div>
                <div className="flex flex-col gap-4">
                    <p>Quick Links</p>
                    <div className="flex gap-2">
                        <div>
                            <ArrowRightIcon class="h-6 w-6 text-black" />
                        </div>
                        <div>Gallery</div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <ArrowRightIcon class="h-6 w-6 text-black" />
                        </div>
                        <div>Contact Us</div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <ArrowRightIcon class="h-6 w-6 text-black" />
                        </div>
                        <div>Ticket Rate</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p>contact info</p>
                    <div className="flex gap-2">
                        <div>
                            <MapPinIcon class="h-6 w-6 text-black" />
                        </div>
                        <div>Tansen, Palpa Lumbini Province</div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <InboxStackIcon class="h-6 w-6 text-black" />
                        </div>
                        <div>contact@cinepalmovies.com.np</div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <PhoneIcon class="h-6 w-6 text-black" />
                        </div>
                        <div>+977 9877654433322</div>
                    </div>
                </div>
            </div>
            <div className="w-[160vh] m-auto bg-white h-[2px]">
                
                </div> 
            {/* margin auto le center ma lauxa */}
            <div className="flex justify-around">
                <div>copyright&copy;cinepalmovies. All rights reserved.</div>
                <div className="flex justify-between gap-6">
                    <div><img className="h-6 w-6" src="/facebook.png" alt="" /></div>
                    <div><img className="h-6 w-6" src="/instagram.png" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
