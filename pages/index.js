import Header from '@/components/Header'
import Searchbar from '@/components/Searchbar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div dir='rtl' className={styles.container}>
      <div className={styles.heroImage}>
        <Image  src="/images/hero.jpg" alt="hero" width={1920} height={1080} />
        <div className={styles.heroImage__overlay}></div>
      </div>
      <Header />
      <Searchbar/>


    </div>
  )
}
