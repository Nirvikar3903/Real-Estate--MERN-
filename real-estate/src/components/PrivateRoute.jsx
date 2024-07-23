import { useSelector } from "react-redux"
import { Outlet , Navigate} from "react-router-dom";

export default function PrivateRoute() {

    const {currentUser} = useSelector((state => state.user));
  return currentUser ? <Outlet/> : <Navigate to={'/sign-in'}/>
}


// if person is not authenticated to protect profile page ths is component is created   
//user navigate is a hook but navigate is a component , 