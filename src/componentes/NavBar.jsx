import "../style/NavBar.css"


function NavBar() {
    const Navlinks = ["Home", "Cities", "About Us", "Contacts"]
    return (
        <div className="NavBar">
            <ul>
                {
                    Navlinks.map(link => {
                        return <li className="Navli">{link}</li>

                    })
                }
            </ul>
        </div>
    )
}
export default NavBar;
