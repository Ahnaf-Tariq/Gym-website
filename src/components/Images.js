import { Moreservices } from "./Moreservices"

export const Images = () => {
    return (
        <div>
            <Moreservices />
            <br /><br />

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
            
        </div>
    )
}