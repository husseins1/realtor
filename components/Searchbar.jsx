import styles from "@/styles/Searchbar.module.css"
export default function Searchbar() {
  return (
    <div className={styles.container}>
    <input type="text" placeholder="Search..."/>
    <div className={styles.search}></div>
  </div>
  )
}
