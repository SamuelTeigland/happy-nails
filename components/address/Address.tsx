import './address.css'
import { PhoneIcon, AddressIcon, HoursIcon } from '@/icons/icons'

export default function Address() {
    return (
        <div className='address__container'>
            <h1 className='address__header'>Curious?</h1>
            <h2 className='address__subheader'>here's where to find us.</h2>
            <div className='address__svg--container'>
                <div className='address__svg--subcontainer'>
                   <div className='address__svg'>
                        <PhoneIcon />
                   </div>
                   <p className='address__svg--paragraph'>
                        (410) 996-9447
                   </p>
                   <p className='address__svg--paragraph'>
                        Call to book an appointment! <span>We are always busy and don't often take walk-ins.</span>
                   </p>
                </div>
                <div className='address__svg--subcontainer'>
                    <div className='address__svg'>
                        <AddressIcon />
                   </div>
                    <p className='address__svg--paragraph'>
                        1 Commercial Plaza, Elkton, MD 21921
                   </p>
                   <p className='address__svg--paragraph'>
                        Located in Bridge Street Plaza
                   </p>
                </div>
                <div className='address__svg--subcontainer'>
                    <div className='address__svg'>
                        <HoursIcon />
                    </div>
                    <p className='address__svg--paragraph'>
                        Friday thru Monday: <span>9am to 7pm</span>
                    </p>
                    <p className='address__svg--paragraph'>
                        Saturday: <span>9am to 6pm</span>
                    </p>
                    <p className='address__svg--paragraph'>
                        Sunday: <span>10am to 4pm</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
