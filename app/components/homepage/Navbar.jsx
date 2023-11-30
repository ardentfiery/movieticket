import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-around bg-white text-black h-14 items-center">
                <div className="icon">logo</div>
                <div className="flex bg-white text-black gap-12 ">
                    <div>Home</div>
                    <div>My tickets</div>
                    <div>Ticket Rate</div>
                    <div>Gallery</div>
                    <div>Contact Us</div>
                </div>
                <div>
                    Log in
                    Register
                </div>
                
            </div>
    </div>
  )
}

export default Navbar