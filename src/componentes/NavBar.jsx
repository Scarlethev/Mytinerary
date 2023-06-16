import "../style/NavBar.css"
import imagelogo1 from "../images/logo-1.png"
// import logoPrueba from "../images/LogoPrueba.jpeg"
import User from "../images/user.jpeg"
import menu from "../images/menu.png"
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
            <LinkRouter to={"/Home"}>
                <div className="logoYtext">
                    <img className="Logo" src={imagelogo1}/>
                        <h3 className="MyItinerary">MyTinerary</h3>
                    </div>
                </LinkRouter>

            {
                NavLinks.map(link => {
                    return <LinkRouter className="Navli" to={link.path}>{link.name}</LinkRouter>
                })

            }
            <LinkRouter to={"/User"}><img className="User" src={User} /></LinkRouter>
        
         <LinkRouter to={"/"}><img className="menuHamburguesa" src={menu}/></LinkRouter>
        </div>
    )
}

export default NavBar;
