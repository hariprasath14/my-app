
import { Link } from "react-router-dom";
import appLogo from "../../../assets/images/logo/logo-sm.png"

const NavHead = () => {
    return (
        <div className="nav-head">
            <div className="app-logo">
                <Link to="/"><img src={appLogo} /></Link>
            </div>
        </div>
    );
}

export default NavHead;