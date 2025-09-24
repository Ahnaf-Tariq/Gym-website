import { useNavigate } from "react-router-dom"
import { Services } from "./Services"

export const Moreservices = () => {
    const navigation2 = useNavigate()

    const click = () => {
        navigation2('/services')
    }
    return (
        <div>
            <Services />
            <br /><br />

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

            <div className="xsm:flex xsm:flex-row xsm:justify-between xsm:max-w-7xl xsm:mx-auto xxsm:flex xxsm:flex-col xxsm:items-center">
                <div className="m-2">
                    <img data-aos='fade-up' src="https://reacy-gym-page.netlify.app/static/media/team1.9b49dcc50f2e9636658c.png" alt="" />
                    {/* <div className="bg-red-500 text-white z-10 hidden">
                        <p>----- Creative Director -----</p>
                        <h1>JAMES PARKER</h1>
                        <div className="flex text-white gap-4">
                            <FaTwitter /><FaFacebook /><FaInstagram />
                        </div>
                    </div> */}
                </div>
                <div className="m-2">
                    <img data-aos='fade-up' src="https://reacy-gym-page.netlify.app/static/media/team2.107693dc1f8864349b6c.png" alt="" />
                </div>
                <div className="m-2">
                    <img data-aos='fade-up' src="https://reacy-gym-page.netlify.app/static/media/team3.532d574cce641787f448.png" alt="" />
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
                        <button onClick={click} className="bg-red-500 text-white rounded px-10 py-4 mt-24 delay-100">More Services</button>
                    </div>
                </div>
            </div>
        </div>
    )
}