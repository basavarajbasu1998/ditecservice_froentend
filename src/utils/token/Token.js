// import React, { useState, useEffect } from 'react';
// import { jwtDecode } from "jwt-decode";
// import { loadState } from "../../helper/SessionStorage";
// import TokenDialog from '../dialogs/TokenDialog';


// const Token = () => {
//     function isTokenExpired(token) {
//         try {
//             const decodedToken = jwtDecode(token);
//             const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
//             if (decodedToken.exp < currentTime) {
//                 return true; // Token is expired
//             }
//             return false; // Token is not expired
//         } catch (error) {
//             console.error("Invalid token specified:", error.message);
//             return true; // Token is expired if decoding fails
//         }
//     }

//     const [dialogOpen, setDialogOpen] = useState(false);
//     const token = loadState("token", "Default Value");
//     const isExpired = isTokenExpired(token);

//     useEffect(() => {
//         if (isExpired) {
//             console.log("Token is expired");
//             setDialogOpen(true);
//         } else {
//             console.log("Token is not expired");
//         }
//     }, [isExpired]);

//     const handleCloseDialog = () => {
//         setDialogOpen(false);
//     };

//     return (
//         <div>
//             <TokenDialog
//                 open={dialogOpen}
//                 onClose={handleCloseDialog}
//                 title="Token Expired"
//                 message="Token is expired. Please log in again."
//             />
//         </div>
//     );
// };

// export default Token;


import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { loadState } from "../../helper/SessionStorage";
import TokenDialog from '../dialogs/TokenDialog';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import { useDispatch } from 'react-redux';
import { EMPTY_AUTH_STATE } from '../../redux/auth/authConstants';


const Token = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();


    function isTokenExpired(token) {
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
            if (decodedToken.exp < currentTime) {
                return true; // Token is expired
            }
            return false; // Token is not expired
        } catch (error) {
            console.error("Invalid token specified:", error.message);
            return true; // Token is expired if decoding fails
        }
    }

    const [dialogOpen, setDialogOpen] = useState(false);
    const token = loadState("token");

    useEffect(() => {
        if (token) {
            const isExpired = isTokenExpired(token);
            if (isExpired) {
                console.log("Token is expired");
                setDialogOpen(true);
            } else {
                console.log("Token is not expired");
            }
        } else {
            console.log("Token not found");
        }
    }, [token]);

    const handleCloseDialog = () => {
        // navigate("auth/login")
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("subauaid");
        Cookies.remove("Role");
        navigate("/");
        dispatch({ type: EMPTY_AUTH_STATE });
        setDialogOpen(false);
    };

    return (
        <div>
            <TokenDialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                title="Session Expired"
                message="Please log in again. to continue using the app"
            />
        </div>
    );
};

export default Token;
