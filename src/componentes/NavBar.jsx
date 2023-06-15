import "../style/NavBar.css"
import imagelogo1 from "../images/logo-1.jpg"
import User from "../images/user.jpeg"
import { Link as LinkRouter } from "react-router-dom"


function NavBar() {
    const NavLinks = [
        {
            name: "Home",
            path: "/Home"
        },
        {
            name: "Cities",
            path: "/Cities"
        }


    ]

    return (
        <div className="NavBar">
            <LinkRouter to={"/Home"}><img className="Logo" src={imagelogo1} /></LinkRouter>

            {
                NavLinks.map(link => {
                    return <LinkRouter className="Navli" to={link.path}>{link.name}</LinkRouter>
                })

            }
            <LinkRouter to={"/User"}><img className="User" src={User} /></LinkRouter>

        </div>
    )
}

export default NavBar;
