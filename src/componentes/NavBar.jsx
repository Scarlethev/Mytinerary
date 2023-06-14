import "../style/NavBar.css"
import { Link as LinkRouter } from "react-router-dom"
import imagelogo1 from "../images/logo-1.jpg"

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
            <LinkRouter to={"/Home"}><img className="Logo" src={imagelogo1}/></LinkRouter>
                {
                    NavLinks.map(link => {
                        return <LinkRouter className="Navli" to={link.path}>{link.name}</LinkRouter>
                    })

                }
        </div>
    )
}

export default NavBar;
                