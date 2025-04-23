import { Form } from "./Form"
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <div>
            <Form />
            <br /><br />

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
                <br />
            </div>
        </div>
    )
}