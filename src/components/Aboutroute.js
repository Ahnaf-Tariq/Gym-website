import { Link, useNavigate } from "react-router-dom"
import { FaTwitter, FaFacebook, FaInstagram, FaBars } from "react-icons/fa";
import { useState } from "react";

export const Aboutroute = () => {
    const [ulVisible, setUlVisible] = useState(false)

    const clicked = () => {
        setUlVisible(!ulVisible)
    }

    const navigation2 = useNavigate()

    const click = () => {
        navigation2('/services')
    }

    const onNavigate = useNavigate()

    const touch = () => {
        onNavigate('/contact')
    }
    return (
        <div>

            {/* ****************** Navbar ******************* */}
            <div className="bg-black">
                <div className="flex justify-around bg-black fixed w-full z-10 p-4">
                    <div className="flex flex-col">
                        <img className="xxsm:h-8 xsm:h-10"  alt="Gym Logo" src="/logo-gym.png" />
                        {ulVisible &&
                            <ul className="text-gray-300 text-xl cursor-pointer xxsm:block xmd:hidden">
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
                    <div className="text-white text-2xl xxsm:block xmd:hidden">
                        <FaBars onClick={clicked} />
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br />
                <div className="text-center">
                    <h1 className="text-5xl text-white font-extrabold">About Us</h1>
                </div>
                <br /><br /><br /><br /><br /><br />
            </div>
            <br /><br />

            {/* ****************** About ******************* */}
            <div className="max-w-7xl mx-auto">
                <div className="xsm:flex xsm:flex-row xsm:justify-between xsm:items-center xsm:gap-10 xxsm:flex xxsm:flex-col xxsm:items-center xxsm:gap-10">
                    <div>
                        <img data-aos="zoom-in" alt="" src="https://reacy-gym-page.netlify.app/static/media/about.6d6b76c48c4f980a5c85.png" />
                    </div>
                    <div data-aos='fade-up'>
                        <h1 className="text-red-400 xmd:text-lg xsm:text-base">---------- ABOUT OUR GYM ----------</h1> <br />

                        <h1 className="text-blue-900 xmd:text-3xl font-bold xsm:text-2xl">SAFE BODY BUILDING PROPER<br /> SOLUTIONS THAT SAVES OUR<br /> VALUABLE TIME!</h1> <br />

                        <h1 className="font-bold xmd:text-xl xsm:text-lg">Brook presents your services with flexible, convenient and cdpose<br />
                            layouts. You can select your favorite layouts & elements for cular
                            ts<br /> with unlimited ustomization possibilities. Pixel-perfect replication
                            of<br /> the designers is intended.</h1> <br />

                        <p className="text-slate-400 xmd:text-lg xsm:text-base">Brook presents your services with flexible, convefnient and chient<br />
                            anipurpose layouts. You can select your favorite layouts.</p> <br /><br />

                        <button onClick={touch} className="bg-red-500 text-white rounded px-10 py-4 delay-100">Become a Member</button>
                    </div>
                </div>
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
                        <button onClick={click} className="bg-red-500 text-white rounded px-10 py-4 mt-24 delay-100">More Services</button>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />

            <div data-aos='fade-up' className="xsm:flex xsm:flex-row xsm:justify-between xsm:max-w-7xl xsm:mx-auto xxsm:flex xxsm:flex-col xxsm:items-center">
                <div className="m-2">
                    <img src="https://reacy-gym-page.netlify.app/static/media/team1.9b49dcc50f2e9636658c.png" alt="" />
                </div>
                <div className="m-2">
                    <img src="https://reacy-gym-page.netlify.app/static/media/team2.107693dc1f8864349b6c.png" alt="" />
                </div>
                <div className="m-2">
                    <img src="https://reacy-gym-page.netlify.app/static/media/team3.532d574cce641787f448.png" alt="" />
                </div>
            </div>
            <br /><br /><br /><br />

            <div className="bg-blue-950">
                <div data-aos="zoom-in" className="xmd:flex xmd:flex-row xmd:justify-between xmd:items-center xmd:max-w-5xl xmd:mx-auto xxsm:flex xxsm:flex-col xxsm:items-center">
                    <div>
                        <h1 className="text-red-400 xsm:text-lg text-center xxsm:text-base xmd:mt-0 xxsm:mt-8">--------- PROMOTION OFFER --------</h1>
                        <h1 className="xmd:text-5xl xxsm:font-bold text-white text-center xsm:text-4xl xxsm:text-2xl">April membership offer<br /> available Now</h1>
                    </div>
                    <div className="mb-16">
                        <button onClick={click} className="bg-red-500 text-white rounded px-10 py-4 mt-24">More Services</button>
                    </div>
                </div>
            </div>
            <br /><br />


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