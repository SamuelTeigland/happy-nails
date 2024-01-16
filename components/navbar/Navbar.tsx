import './navbar.css'

export default function Navbar() {
    return (
       <div className='navbar__container'>
            <a className='navbar__logo--container' href='/'>
                <img className='navbar__logo' src='/images/logos/fullLogo.png' width={100} height={100} alt='Happy Nails Logo'/>
            </a>
            <div className='navbar__menu--container'>
                <ul className='navbar__menu--unordered__list'>
                    <li className='navbar__menu--list'>
                        <a className='navbar__menu--link' href='#about-us'>
                           About Us 
                        </a>
                    </li>
                    <li className='navbar__menu--list'>
                        <a className='navbar__menu--link' href='#contact-us'>
                            Contact Us
                        </a>
                    </li>
                    <li className='navbar__menu--list'>
                        <a className='navbar__menu--link' href='#services'>
                            Our Services
                        </a>
                    </li>
                </ul>
            </div>
       </div> 
    )
}
