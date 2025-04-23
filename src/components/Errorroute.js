import { Link } from "react-router-dom"

export const Errorroute = () => {
    return (
        <div className="bg-gray-700 h-screen">
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white text-black border w-1/3 rounded-lg px-8 py-4">
                    <h1 className="font-bold text-2xl">Page Not Found</h1>
                    <br />
                    <p>Looks like you've followed a broken link or entered a URL that
                        doesn't exist on this site.</p>
                    <br />
                    <Link to='/' className="underline text-green-800 font-semibold">Back to our site</Link>
                    <br /><br />
                    <hr />
                    <br />
                    <p>If this is your site, and you weren't expecting a 404 for this path, please
                        visit Netlify's <Link className="underline  text-green-800 font-semibold"
                            to='https://answers.netlify.com/t/support-guide-i-ve-deployed-my-site-but-i-still-see-page-not-found/125?utm_source=404page&utm_campaign=community_tracking'>
                            "page not found" support guide</Link> for troubleshooting tips.
                    </p>
                </div>
            </div>
        </div>
    )
}