import Image from 'next/image'
import styles from './page.module.css'
import { Navbar, Hero, Address, Footer } from '@/components/components'

export default function Home() {
    return (
        <main>
           <Navbar />
           <Hero />
           <Address />
           <Footer />
        </main>
    )
}
