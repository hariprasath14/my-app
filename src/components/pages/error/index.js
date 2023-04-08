import { Fragment } from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <Fragment>
            <div className="make-center flex-column py-5">

                <p className="mb-3 pt-5 mt-5">Oops!, 404 Page Not Found</p>
                <Link to="/" className="text-decoration-underline">Go Home</Link>
            </div>
        </Fragment>
    );
}

export default Error;