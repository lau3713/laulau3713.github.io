import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoIosMailOpen } from 'react-icons/io'
import '../styles/FooterStyle.css'
import '../styles/VariablesStyle.css'

function Footer() {
  return (
    <>
    <div className="footer">
      <div className='footer-menu'>
        <nav>
          <span>
            <a href='/qui-sommes-nous'>QUI SOMMES NOUS ?</a>
          </span>
          <span>
            <a href='/produit'>NOTRE PRODUIT</a>
          </span>
          <span>
            <a href='/contact'>CONTACTEZ-NOUS</a>
          </span>
        </nav>
      </div>
      <div className='footer-logo'>
        <img src='/assets/img/logo.svg'/>
      </div>

      <div className='social-media'>
        <p>Suivez-nous sur les réseaux sociaux
pour découvrir notre aspirateur en action !</p>
      <div>
        <FaFacebookF size={30} />
        <BsInstagram size={30} />
        <IoIosMailOpen size={30} />
      </div>
      </div>
    </div>
      <p></p>
      </> 
   );
}

export default Footer;