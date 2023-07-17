import "../style/Footer.css"
import {Link as LinkRouter} from 'react-router-dom';


export default function Footer() {

    const NavLinks = [
                {
                    name: "ABOUT US",
                    path: "/Home"
                },
                {
                    name: "CITIES",
                    path: "/Cities"
                },

                {
                    name: "CONTACT",
                    path: "./Home"
                },

                {
                    name: "LEGAL WARNING",
                    path: "./Home"
                },

                
                {
                    name: "PRIVACY POLICY",
                    path: "./Home"
                },

                
                {
                    name: "TERMS AND CONDITIONS",
                    path: "./Home"
                },
        
           ]


    return (
        <>
            <section className="footer">
                <div className="links">

                {
                NavLinks.map((link,index) => {
                        return (
                        <div key={index}>
                        <LinkRouter className="links" to={link.path}>{link.name}</LinkRouter>
                        </div>
                        )
                })
            }
                    
                </div>
         </section> 
            <section className="copyright">
                <h4>COPYRIGTH @ 2023 by</h4>
            </section>
        </>
    )
}