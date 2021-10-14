import {
    Home,
    PersonOutline
} from "@material-ui/icons"
import "./Header.css";
import { Link } from "react-router-dom";

// import Form from "./Components/Form_Component/Form";
const Header = () => {
    return (


        <div className="header">
            <div className="header_img">
                        <img src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-White-Large.png" alt="codepen logo" />
                        <h1>CODEPEN</h1>
                    </div>
            <div className="header_icons">
                <div className="header_icon">
                <p>
                    <Home/><br/>
                    <Link className="link" to="/">Home</Link>
                </p>
                <p>
                    <PersonOutline/><br/>
                    <Link className="link" to="/login">Signup</Link>
                </p>
                </div>
            </div>
        </div>
    )
}

export default Header
