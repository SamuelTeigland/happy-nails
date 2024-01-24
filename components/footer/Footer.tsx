import './footer.css';

export default function Footer() {
    return (
        <div className='footer__container'>
             <a className='footer__logo--container' href='/'>
                <img className='footer__logo' src='/images/logos/fullLogo.png' width={100} height={100} alt='Happy Nails Logo'/>
            </a>
            <div className='footer__address--container'>
                <p className='footer__address--paragraph'>1 Commercial Plaza, <span>Elkton, MD 21921</span></p>
            </div>
            <div className='footer__bottom--container'>
                <p className='footer__bottom--paragraph'>Created with passion by <a target='_blank' rel='nofollow' href='https://www.websiteartificers.com'>Website Artificers</a>© 2023</p>
            </div>
        </div>
    )
}
