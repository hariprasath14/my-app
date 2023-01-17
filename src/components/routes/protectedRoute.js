import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, redirectTo, authRoute }) {

    let isAuthenticated = false

    let data = localStorage.getItem("tmtData");

    if (data) {
        try {
            data = JSON.parse(data)
        } catch { }
        if (data.email) {
            console.log(data.email);
            isAuthenticated = true
        }
    }


    if (!authRoute) {
        return isAuthenticated ? <Navigate to={redirectTo} /> : children
    }

    return isAuthenticated ? children : <Navigate to={redirectTo} />;

}

export default ProtectedRoute