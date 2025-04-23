import { Images } from "./Images"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

export const Form = () => {
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
    return (
        <div>
            <Images />
            <br /><br /><br /><br />

            <div className="xmd:flex xmd:flex-row xmd:justify-around xmd:max-w-6xl xmd:mx-auto xxsm:flex xxsm:flex-col xxsm:items-center xxsm:gap-10">
                <div data-aos='zoom-in'>
                    
                    <img className="w-96 h-full" src="https://reacy-gym-page.netlify.app/static/media/contact.3f861b7e3307f5fe0a2a.png" alt="" />
                </div>
                <div data-aos='fade-up'>
                    <h1 className="text-red-400 xsm:text-lg xxsm:text-base xxsm:text-center">---------- CONTACT FORM --------</h1><br />
                    <h1 className="xsm:text-3xl font-extrabold text-blue-900 xxsm:text-2xl xxsm:text-center">FEEL FREE TO CONTACT WITH US!</h1>
                    <br /><br />
                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <div className="xsm:flex xsm:flex-row xsm:gap-16 xxsm:flex xxsm:flex-col xxsm:gap-6">
                                <div className="text-center">
                                    <input className="outline outline-red-600 rounded p-2 m-2" type="text" placeholder="Name" {...register('Name')} />
                                    <p className="text-red-600">{errors.Name?.message}</p>
                                </div>
                                <div className="xxsm:max-w-52 xxsm:mx-auto text-center">
                                    <input className="outline outline-red-600 rounded p-2 m-2" type="number" placeholder="Phone No." {...register('Phone')} />
                                    <p className="text-red-600">{errors.Phone?.message}</p>
                                </div>
                            </div> <br />
                            <div className="xsm:flex xsm:flex-row xsm:gap-16 xxsm:flex xxsm:flex-col xxsm:gap-6">
                                <div className="text-center">
                                    <input className="outline outline-red-600 rounded p-2 m-2" type="text" placeholder="Email" {...register('Email')} />
                                    <p className="text-red-600">{errors.Email?.message}</p>
                                </div>
                                <div className="text-center">
                                    <input className="outline outline-red-600 rounded p-2 m-2" type="text" placeholder="Address" {...register('Address')} />
                                    <p className="text-red-600">{errors.Address?.message}</p>
                                </div>
                            </div> <br />
                            <div className="text-center">
                                <input className="outline outline-red-600 rounded p-2 xsm:w-full m-2" type="text" placeholder="Message" {...register('Msg')} />
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
        </div>
    )
}