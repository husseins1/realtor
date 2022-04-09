import styles from "@/styles/PropertyGrid.module.css";
import Link from "next/link";
import Property from "./Property";
export default function PropertyGrid({data}) {
  return (
    <div className={styles.propertyGrid}>
      <h1 className={styles.heading}>بيوت بغداد</h1>
      <div className={styles.flex}>
        {data.map((item, index) => (
          <Link key={index} href={`/property/${item.attributes.slug}`}>
            <a className={styles.link}>
              <Property item={item} />
            </a>
          </Link>
        ))}

        {/* <Link href="/">
          <a className={styles.link}>
            <Property />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.link}>
            <Property />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.link}>
            <Property />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.link}>
            <Property />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.link}>
            <Property />
          </a>
        </Link> */}
      </div>
    </div>
  );
}
