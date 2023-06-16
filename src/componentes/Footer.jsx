import "../style/Footer.css"



export default function Footer() {
    return (
        <>
            <section className="footer">
                <div className="links">
                    <div>
                        <h3>LINKS:</h3>
                        <p>ABOUT US</p>
                        <p>NEWSLATTER</p>
                        <p>CONTACT</p>
                    </div>
                    <div>
                        <h3>OTHER LINKS:</h3>
                        <p>LEGAL WARNING</p>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS AND CONDITIONS</p>
                    </div>
                    <div>
                        <h3>QUICK CONTACT:</h3>
                        <p>+123-456-7890</p>
                        <p>WORDTRAVEL@GMAIL.COM</p>
                        <p>CAPITAL FEDERAL, ARGENTINA</p>
                    </div>
                </div>
         </section>
            <section className="copyright">
                <h4>COPYRIGTH @ 2023 by</h4>
            </section>
        </>
    )
}