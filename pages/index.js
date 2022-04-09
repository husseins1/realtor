import Header from '@/components/Header'
import Property from '@/components/Property'
import PropertyGrid from '@/components/PropertyGrid'
import Searchbar from '@/components/Searchbar'
import { API_URL } from 'config'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({places:{data}}) {
  return (
      <>
      <Header />
    <div dir="rtl" className={styles.container}>
      <section className={styles.heroContainer}>

      <div className={styles.heroImage}>
        <Image  objectFit='cover'  src="/images/hero.jpg" alt="hero" layout="fill" />
        <div className={styles.heroImage__overlay}></div>
      </div>
      <div className={styles.heroText}>
      
        <h1 className={styles.heading} >خلينا نلكالك احسن بيت</h1>
        <h2 className={styles.subHeading} >ابحث عن محافظة, مدينة, منطقة</h2>
        <Searchbar />
      </div>
      </section>
      <section  className={styles.properties}>

        <PropertyGrid data={data} />
      </section>
    </div>
      </>
  );
}

export  async function getStaticProps() {
  
  const res = await fetch(`${API_URL}/api/places?populate=thumbnail`);
  const places = await res.json();
  
  return{
    props:{
      places
      
    }
  }
}