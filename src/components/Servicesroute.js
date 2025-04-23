import { Link } from "react-router-dom"
import { CgGym } from "react-icons/cg";
import { FaHeartPulse } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaInstagram, FaBars } from "react-icons/fa";
import { useState } from "react";

export const Servicesroute = () => {
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
                    <h1 className="text-5xl text-white font-extrabold">Our Services</h1>
                </div>
                <br /><br /><br /><br /><br /><br />
            </div>
            <br /><br />

            {/* ****************** More Services ******************* */}
            <div className="bg-red-100">
                <div data-aos="zoom-in" className="xmd:flex xmd:flex-row xmd:justify-between xmd:items-center xmd:max-w-5xl xmd:mx-auto xxsm:flex xxsm:flex-col xxsm:items-center ">
                    <div>
                        <h1 className="text-red-400 xsm:text-lg text-center xxsm:text-base xmd:mt-0 xxsm:mt-8">--------- OUR TEAM MEMBERS --------</h1>
                        <h1 className="xmd:text-5xl xxsm:font-bold text-blue-900 text-center xsm:text-4xl xxsm:text-2xl">OUR MOST EXPRIENCED<br /> TRAINERS.</h1>
                    </div>
                    <div className="mb-16">
                        <button className="bg-red-500 text-white rounded px-10 py-4 mt-24 delay-100">More Services</button>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />

            {/* ****************** 3 CARDS ******************* */}
            <div data-aos='fade-up' className="xmd:flex xmd:flex-row xmd:justify-around xxsm:flex xxsm:flex-col">
                <div className="flex flex-col items-center w-full m-2 bg-red-100 border rounded-lg px-12 py-10 text-center text-black hover:bg-red-600 hover:text-white">
                    <CgGym className="text-3xl" /><br />
                    <h1 className="font-bold text-xl">QUALITY EQUIPMENT</h1>
                    <p className="text-lg">The sea freight service has grown<br /> considerably in recent years.
                        We spend<br /> time getting to know your needs and<br /> then.</p>
                </div>
                <div className="flex flex-col items-center w-full m-2 bg-red-100 border rounded-lg px-12 py-10 text-center text-black hover:bg-red-600 hover:text-white">
                    <FaHeartPulse className="text-3xl" /><br />
                    <h1 className="font-bold text-xl">HEALTH CARING</h1>
                    <p className="text-lg">The sea freight service has grown<br /> considerably in recent years.
                        We spend<br /> time getting to know your needs and<br /> then.</p>
                </div>
                <div className="flex flex-col items-center w-full m-2 bg-red-100 border rounded-lg px-12 py-10 text-center text-black hover:bg-red-600 hover:text-white">
                    <FaClock className="text-3xl" /><br />
                    <h1 className="font-bold text-xl">GYM STRATEGIES</h1>
                    <p className="text-lg">The sea freight service has grown<br /> considerably in recent years.
                        We spend<br /> time getting to know your needs and<br /> then.</p>
                </div>
            </div>
            <br /><br />

            {/* ****************** FOOTER ******************* */}
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