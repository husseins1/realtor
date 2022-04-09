import styles from "@/styles/Searchbar.module.css"
export default function Searchbar() {
  return (
   <form className={styles.form}>
	<label className={styles.label} htmlFor="search">Search</label>
	<input className={styles.input} id="search" type="search" pattern=".*\S.*" required/>
	<span className={styles.caret}></span>  
</form>
  )
}
