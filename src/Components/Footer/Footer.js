import footer_logo from '../Assest/autumn-leaves-book-logo-icon-design-bookstore-logo-design-minimalistic-logo-for-books-with-leaf_8019.svg';
import instagram_icon from '../Assest/instagram_icon.png';
import pintester_icon from '../Assest//pintester_icon.png';
import whatsapp_icon from '../Assest/whatsapp_icon.png';
import './Footer.css'

const Footer = () => {
    return (  <div className="footer">
        <div className='footer-logo'>
            <img src={footer_logo} alt=""/>
            <p>Books</p>
        </div>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <a href='https://www.instagram.com/'>
                    <img src={instagram_icon} alt='instagram'/>
                </a>
            </div>
            <div className='footer-icons-container'>
                <a href='https://ru.pinterest.com/'>
                    <img src={pintester_icon} alt='pintester'/>
                </a>
            </div>
            <div className='footer-icons-container'>
                <a href='https://web.whatsapp.com/'>
                    <img src={whatsapp_icon} alt='whatsapp'/>
                </a>
            </div>
        </div>



    </div>);
}
 
export default Footer;