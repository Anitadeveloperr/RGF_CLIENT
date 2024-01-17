import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.config";

const PrivetRoute = ({children}) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    if(user){
        return children;
    } 
    return navigate('/admin');
};

export default PrivetRoute;