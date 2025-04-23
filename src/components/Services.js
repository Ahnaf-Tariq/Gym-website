import { About } from "./About"
import { CgGym } from "react-icons/cg";
import { FaHeartPulse } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Services = () => {
    const navigation = useNavigate()

    const click = () => {
        navigation('/services')
    }
    // lg:text-xl md:text-lg sm:text-base text-sm 
    return (
        <div>
            <About />
            <br /><br />

            <div id="image2">
                <div data-aos="zoom-in" className="xmd:flex xmd:flex-row xmd:justify-around xmd:items-center xxsm:flex xxsm:flex-col xxsm:items-center">
                    <div className="flex flex-col items-center mt-24">
                        <h1 className="text-red-400 xsm:text-lg xxsm:text-base">--------- OUR SERVICES FOR YOU --------</h1>
                        <h1 className="xsm:text-5xl xxsm:font-bold text-white text-center xxsm:text-3xl ">PUSH YOUR LIMITS FORWARD<br /> WE OFFER TO YOU.</h1>
                    </div>
                    <div>
                        <button onClick={click} className="bg-red-500 text-white rounded px-10 py-4 mt-24 delay-100">More Services</button>
                    </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="xmd:flex xmd:flex-row xmd:justify-around xxsm:flex xxsm:flex-col">
                    <div data-aos='fade-up' className="flex flex-col items-center xmd:w-full m-2 bg-white border rounded-lg px-12 py-10 text-center text-black hover:bg-red-600 hover:text-white">
                        <CgGym className="text-3xl" /><br />
                        <h1 className="font-bold text-xl">QUALITY EQUIPMENT</h1>
                        <p className="text-lg">The sea freight service has grown<br /> considerably in recent years.
                            We spend<br /> time getting to know your needs and<br /> then.</p>
                    </div>
                    <div data-aos='fade-up' className="flex flex-col items-center xmd:w-full m-2 bg-white border rounded-lg px-12 py-10 text-center text-black hover:bg-red-600 hover:text-white">
                        <FaHeartPulse className="text-3xl" /><br />
                        <h1 className="font-bold text-xl">HEALTH CARING</h1>
                        <p className="text-lg">The sea freight service has grown<br /> considerably in recent years.
                            We spend<br /> time getting to know your needs and<br /> then.</p>
                    </div>
                    <div data-aos='fade-up' className="flex flex-col items-center xmd:w-full m-2 bg-white border rounded-lg px-12 py-10 text-center text-black hover:bg-red-600 hover:text-white">
                        <FaClock className="text-3xl" /><br />
                        <h1 className="font-bold text-xl">GYM STRATEGIES</h1>
                        <p className="text-lg">The sea freight service has grown<br /> considerably in recent years.
                            We spend<br /> time getting to know your needs and<br /> then.</p>
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
    )
}