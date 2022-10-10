import { Link } from "react-router-dom"


function Error() {
    return (
        <div className="fullscreen flex flex-col justify-center items-center">
            <div className="flex flex-row">
                <h1 className="font-bold text-6xl pr-6">404</h1>
                <div className="font-medium text-xl">Looks like you got a little bit lost....<br/>Head <Link to="/" className="underline">home</Link>.</div>
            </div>
            <div style={{height:"70px"}}></div>{/* Increase its height. Looks better due to navbar */}
        </div>
    );
}

export default Error;