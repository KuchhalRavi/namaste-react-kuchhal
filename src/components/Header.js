import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
        <>
        <title>My React App</title>
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul className="nav-items-list">
                    <li className="nav-items-label">Home</li>
                    <li className="nav-items-label">About us</li>
                    <li className="nav-items-label">Contact</li>
                    <li className="nav-items-label">Cart</li>
                </ul>
            </div>

        </div>
        </>
    );
    
 };
 export default Header;