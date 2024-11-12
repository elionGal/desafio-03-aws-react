import "../styles/FooterStyle.css"
import { FaMapMarkerAlt } from "react-icons/fa";


function Footer() {
    return(
        <>
        <div className="footerContent">
            <div className="contact">
                <p className="contactText">Assim que possível, me envie um email para que possamos trabalhar felizes juntos!</p>
            </div>    
            <div className="icons">
                <img src="/src/assets/images/Frame124.svg"/>
                <img src="/src/assets/images/Property 1=facebook black.svg"/>
                <img src="/src/assets/images/Property 1=twitter black.svg"/>
                <img src="/src/assets/images/Property 1=youtube black.svg"/>
            </div>
            <div className="footerInfo">
                <span><FaMapMarkerAlt className="mapMarket"/>Brasil</span>
                <span>© 2024, All Rights By Compass UOL Brasil</span>
            </div>
        </div>
        </>
    )
}

export default Footer;