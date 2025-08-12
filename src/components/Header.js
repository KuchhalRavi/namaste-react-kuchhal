import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineUser from "../utils/useOnlineUser";
const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login');
    const handleLoginBtn = () => {
        return loginBtn == 'Login' ? setLoginBtn('Logout') : setLoginBtn('Login')
    }
    return (
        <>
        <title>My React App</title>
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul className="nav-items-list">
                    <li className="nav-items-label">User Status: {useOnlineUser() ? "Online" : "Offline"}</li>
                    <li className="nav-items-label"><Link to="/">Home</Link></li>
                    <li className="nav-items-label"><Link to="/about">About us</Link></li>
                    <li className="nav-items-label"><Link to="/contact">Contact</Link></li>
                    <li className="nav-items-label">Cart</li>
                   <button className="login-btn" onClick={handleLoginBtn}>{loginBtn}</button>
                </ul>
            </div>

        </div>
        </>
    );
    
 };
 export default Header;