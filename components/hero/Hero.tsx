import './hero.css'

export default function Hero() {
    return (
        <div className='hero__container'>
           <h1 className='hero__header'>A Beauty Salon</h1>
           <h2 className='hero__subheader'>Based in Elkton, MD</h2>
           <p className='hero__paragraph'>
                Feel refreshed and indulge a bit. You deserve it.
           </p>
           <div className='hero__button--container'>
                <a className='hero__button--link' href='/#contact-us'>
                    <button className='hero__button button__primary'>contact us</button>
                </a>
                <a className='hero__button--link' href='/#services'>
                    <button className='hero__button button__secondary'>our services</button>
                </a>
           </div>
           <p className='hero__secondary--paragraph'>
                Or want to book an appointment? <span>Give us a call at (410) 996-9447!</span>
            </p>
        </div>
    )
}
