import { Link } from "react-router-dom"
import { FaTwitter, FaFacebook, FaInstagram, FaBars } from "react-icons/fa";
import { useState } from "react";

export const Galleryroute = () => {
    const [ulVisible, setUlVisible] = useState(false)

    const clicked = () => {
        setUlVisible(!ulVisible)
    }
    return (
        <div>

            {/* ****************** Navbar ******************* */}
            <div className="bg-black">
                <div className="flex justify-around bg-black fixed w-full z-10 p-4">
                    <div className="flex flex-col">
                        <img alt="Gym Logo" src="/logo-gym.png" />
                        {ulVisible &&
                            <ul className="text-white text-xl cursor-pointer xxsm:block xmd:hidden">
                                <li className="m-4 hover:text-red-400"><Link to='/'>Home</Link></li>
                                <li className="m-4 hover:text-red-400"><Link to='/about'>About</Link></li>
                                <li className="m-4 hover:text-red-400"><Link to='/services'>Services</Link></li>
                                <li className="m-4 hover:text-red-400"><Link to='/gallery'>Gallery</Link></li>
                                <li className="m-4 hover:text-red-400"><Link to='/contact'>Contact</Link></li>
                            </ul>}
                    </div>
                    <ul className="text-white text-xl cursor-pointer xxsm:hidden xmd:flex">
                        <li className="m-4 hover:text-red-400"><Link to='/'>Home</Link></li>
                        <li className="m-4 hover:text-red-400"><Link to='/about'>About</Link></li>
                        <li className="m-4 hover:text-red-400"><Link to='/services'>Services</Link></li>
                        <li className="m-4 hover:text-red-400"><Link to='/gallery'>Gallery</Link></li>
                        <li className="m-4 hover:text-red-400"><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <div className="text-white mt-3 text-2xl xxsm:block xmd:hidden">
                        <FaBars onClick={clicked} />
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br />
                <div className="text-center">
                    <h1 className="text-5xl text-white font-extrabold">Our Gallery</h1>
                </div>
                <br /><br /><br /><br /><br /><br />
            </div>
            <br /><br />

            {/* ****************** Images ******************* */}
            <div className="xsm:flex xsm:flex-row xsm:max-w-7xl xsm:mx-auto xxsm:flex xxsm:flex-col">
                <div data-aos="zoom-in" className="m-2">
                    <img className="hover:opacity-50" src="https://reacy-gym-page.netlify.app/static/media/gallery1.f9391db9abaa93e6a157.png" alt="" />
                </div>
                <div>
                    <div className="xsm:flex xsm:flex-row xxsm:flex xxsm:flex-col">
                        <div data-aos="zoom-in" className="m-2">
                            <img className="hover:opacity-50" src="https://reacy-gym-page.netlify.app/static/media/gallery2.133e4391dad0b19e82a4.png" alt="" />
                        </div>
                        <div data-aos="zoom-in" className="m-2">
                            <img className="hover:opacity-50" src="https://reacy-gym-page.netlify.app/static/media/gallery3.9ffd8f506ea999752ce9.png" alt="" />
                        </div>
                    </div>
                    <div className="xsm:flex xsm:flex-row xxsm:flex xxsm:flex-col">
                        <div data-aos="zoom-in" className="m-2">
                            <img className="hover:opacity-50" src="https://reacy-gym-page.netlify.app/static/media/gallery4.ab24b28c6caf9ac4a39c.png" alt="" />
                        </div>
                        <div data-aos="zoom-in" className="m-2">
                            <img className="hover:opacity-50" src="https://reacy-gym-page.netlify.app/static/media/gallery5.ffd49cea733146493037.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />

            {/* ****************** Footer ******************* */}
            <div className="ftrpx:flex ftrpx:flex-row ftrpx:justify-around xxsm:flex xxsm:flex-col" id="image3">
                <div className="text-center mt-16">
                    <h1 className="text-white text-xl font-bold">COMPANY</h1>
                    <ul className="text-gray-400">
                        <li>About us</li>
                        <li>company</li>
                        <li>press & blog</li>
                        <li>privacy policy</li>
                    </ul>
                </div>
                <div className="text-center mt-16">
                    <h1 className="text-white text-xl font-bold">OPEN HOUR</h1>
                    <ul className="text-gray-400">
                        <li>Monday 11am-7pm</li>
                        <li>Tuesday-Friday 11am-8pm</li>
                        <li>Saturday 10am-6pm</li>
                        <li>Sunday 11am-6pm</li>
                    </ul>
                </div>
                <div className="text-center mt-16">
                    <h1 className="text-white text-xl font-bold">RESOURCES</h1>
                    <ul className="text-gray-400">
                        <li>Home Insurance</li>
                        <li>Travel Insurance</li>
                        <li>Car Insurance</li>
                        <li>Business Insurance</li>
                        <li>Heal Insurance</li>
                    </ul>
                </div>
                <div className="text-center mt-16">
                    <div className="flex justify-center">
                        <img alt="Gym Logo" src="/logo-gym.png" />
                    </div>
                    <p className="text-gray-400">GThe trade war currently ensuing<br /> between te US anfd several<br /> natxions
                        around thdhe globe,<br /> most fiercely with.</p>
                    <div className="flex justify-center text-white gap-4">
                        <FaTwitter /><FaFacebook /><FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}