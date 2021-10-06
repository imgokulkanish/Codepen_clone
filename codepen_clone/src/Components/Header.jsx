import {
    Home,
    LiveTv,
    PersonOutline,
    Search,
    VideoLibrary,
    FlashOn
} from "@material-ui/icons"
import "./Header.css";
const Header = () => {
    return (
        
        <div className="header">
            <div className="header_img">
                        <img src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-White-Large.png" alt="codepen logo" />
                        <h1>CODEPEN</h1>
                    </div>
            <div className="header_icons">
                <div className="header_icon">
                    <Home/>
                    <p>Home</p>
                </div>
                <div className="header_icon">
                    <PersonOutline/>
                    <p>Login</p>
                </div>
            </div>
        </div>
    )
}

export default Header
