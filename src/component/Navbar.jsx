import logo from "../assets/logo3.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const NavBar = () => {
    return(
        <nav className="flex itens-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">

                <a href="https://www.linkedin.com/in/jofre-tomas-811113197/"       
                    target="_blank" 
                    rel="nooperner noreferrer" 
                    aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/DevJofre" 
                    target="_blank" 
                    rel="nooperner noreferrer" 
                    aria-label="GitHub">
                    <FaGit />
                </a>
                <a href="https://www.instagram.com/joffrey_thomas/" 
                    target="_blank" 
                    rel="nooperner noreferrer" 
                    aria-label="Instagram">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}

export default NavBar

