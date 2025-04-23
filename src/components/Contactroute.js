import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { FaTwitter, FaFacebook, FaInstagram, FaBars } from "react-icons/fa";
import { useState } from "react";

export const Contactroute = () => {
    const schema = yup.object().shape({
        Name: yup.string().required('Name is required!'),
        Phone: yup.number().integer().positive().required(),
        Email: yup.string().email().required(),
        Address: yup.string().required(),
        Msg: yup.string().required(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const submit = (data) => {
        console.log(data)
    }


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
                    <h1 className="text-5xl text-white font-extrabold">Contact</h1>
                </div>
                <br /><br /><br /><br /><br /><br />
            </div>
            <br /><br />

            {/* ****************** Form ******************* */}
            <div className="xmd:flex xmd:flex-row xmd:justify-around xmd:max-w-6xl xmd:mx-auto xxsm:flex xxsm:flex-col xxsm:items-center xxsm:gap-10">
                <div data-aos='zoom-in'>
                    <img className="w-96 h-full" src="https://reacy-gym-page.netlify.app/static/media/contact.3f861b7e3307f5fe0a2a.png" alt="" />
                </div>
                <div data-aos='fade-up'>
                    <h1 className="text-red-400 xsm:text-lg xxsm:text-base xxsm:text-center">---------- CONTACT FORM --------</h1><br />
                    <h1 className="xsm:text-3xl font-bold text-blue-900 xxsm:text-2xl xxsm:text-center">FEEL FREE TO CONTACT WITH US!</h1>
                    <br /><br />
                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <div className="xsm:flex xsm:flex-row xsm:gap-16 xxsm:flex xxsm:flex-col xxsm:gap-6">
                                <div>
                                    <input className="outline outline-red-600 rounded p-2 xxsm:w-full" type="text" placeholder="Name" {...register('Name')} />
                                    <p className="text-red-600">{errors.Name?.message}</p>
                                </div>
                                <div className="xsm:max-w-52 xxsm:max-w-96">
                                    <input className="outline outline-red-600 rounded p-2 xxsm:w-full" type="number" placeholder="Phone No." {...register('Phone')} />
                                    <p className="text-red-600">{errors.Phone?.message}</p>
                                </div>
                            </div> <br />
                            <div className="xsm:flex xsm:flex-row xsm:gap-16 xxsm:flex xxsm:flex-col xxsm:gap-6">
                                <div>
                                    <input className="outline outline-red-600 rounded p-2 xxsm:w-full" type="text" placeholder="Email" {...register('Email')} />
                                    <p className="text-red-600">{errors.Email?.message}</p>
                                </div>
                                <div>
                                    <input className="outline outline-red-600 rounded p-2 xxsm:w-full" type="text" placeholder="Address" {...register('Address')} />
                                    <p className="text-red-600">{errors.Address?.message}</p>
                                </div>
                            </div> <br />
                            <div>
                                <input className="outline outline-red-600 rounded p-2 w-full" type="text" placeholder="Message" {...register('Msg')} />
                                <p className="text-red-600">{errors.Msg?.message}</p>
                            </div>
                        </div>
                        <br /><br />
                        <div className="xxsm:flex xxsm:justify-center xsm:flex xsm:justify-start">
                            <button className="bg-red-500 text-white rounded px-10 py-4 delay-100">Send Message</button>
                        </div>
                    </form>
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