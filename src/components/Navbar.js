import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
    const words = ["BUILD", "PERFECT", "BODY", "SHAPE", "FOR", "GOOD", "AND", "HEALTHY", "LIFE"];
    const [displayText, setDisplayText] = useState(words.join(" "));
    const [step, setStep] = useState(words.length);
    const [isDisappearing, setIsDisappearing] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isDisappearing) {
                if (step > 0) {
                    setDisplayText(words.slice(0, step - 1).join(" "));
                    setStep(step - 1);
                } else {
                    setIsDisappearing(false);
                    setStep(1);
                }
            } else {
                if (step <= words.length) {
                    setDisplayText(words.slice(0, step).join(" "));
                    setStep(step + 1);
                } else {
                    setIsDisappearing(true);
                    setStep(words.length);
                }
            }
        }, 500);

        return () => clearInterval(interval);
    }, [step, isDisappearing, words]);


    const [navbg, setNavBg] = useState('bg-transparent')

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setNavBg('bg-black');
        } else {
            setNavBg('bg-transparent');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [ulVisible, setUlVisible] = useState(false)

    const clicked = () => {
        setUlVisible(!ulVisible)
    }

    return (
        <div>
            <div className="w-full h-screen" id="image1">
                <div className={`${navbg} fixed w-full z-10 p-4`}>
                    <div className="flex justify-around">
                        <div className="flex flex-col">
                            <img className="xxsm:h-8 xsm:h-10" alt="Gym Logo" src="/logo-gym.png" />
                            {ulVisible &&
                                <ul className="text-gray-300 text-lg cursor-pointer xxsm:block xmd:hidden">
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
                        <div className="text-white text-2xl xxsm:block xmd:hidden ">
                            <FaBars onClick={clicked} />
                        </div>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />

                <div className="flex flex-col items-center">
                    <h1 className='text-red-400 xmd:text-2xl xsm:text-xl xxsm:text-base'>---------- WITH PATRICK POTTER ----------</h1><br />
                    <div className="max-w-4xl">
                        <h1 className='text-white xmd:text-6xl xsm:text-4xl xxsm:text-xl xsm:font-semibold xxsm:font-medium  text-center xmd:font-bold'>{displayText}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}