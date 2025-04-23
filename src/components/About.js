import { useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar"

export const About = () => {
    const navigation3 = useNavigate()

    const clicked = () => {
        navigation3('/contact')
    }
    return (
        <div>
            <Navbar />
            <br /><br />

            <div className="max-w-7xl mx-auto">
                <div className="xsm:flex xsm:flex-row xsm:justify-between xsm:items-center xsm:gap-10 xxsm:flex xxsm:flex-col xxsm:items-center xxsm:gap-10">
                    <div>
                        <img data-aos="zoom-in" className="xxsm:mx-4" alt="" src="https://reacy-gym-page.netlify.app/static/media/about.6d6b76c48c4f980a5c85.png" />
                    </div>
                    <div data-aos='fade-up' className="xxsm:mx-4">
                        <h1 className="text-red-400 xmd:text-lg xsm:text-base">---------- ABOUT OUR GYM ----------</h1> <br />

                        <h1 className="text-blue-900 xmd:text-3xl font-bold xsm:text-2xl">SAFE BODY BUILDING PROPER<br /> SOLUTIONS THAT SAVES OUR<br /> VALUABLE TIME!</h1> <br />

                        <h1 className="font-bold xmd:text-xl xsm:text-lg">Brook presents your services with flexible, convenient and cdpose<br />
                            layouts. You can select your favorite layouts & elements for cular
                            ts<br /> with unlimited ustomization possibilities. Pixel-perfect replication
                            of<br /> the designers is intended.</h1> <br />

                        <p className="text-slate-400 xmd:text-lg xsm:text-base">Brook presents your services with flexible, convefnient and chient<br />
                            anipurpose layouts. You can select your favorite layouts.</p> <br /><br />

                        <button onClick={clicked} className="bg-red-500 text-white rounded px-10 py-4 delay-100">Become a Member</button>
                    </div>
                </div>
            </div>
        </div>
    )
}