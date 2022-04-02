import Link from 'next/link'
import React from 'react'
import styles from "@/styles/Dropdown.module.css";


export default function Dropdown({title,items,big,children}) {
    return (
      <div className={styles.dropdown}>
        <button  className={styles.dropbtn}>
          Dropdown
          <svg
          height={20}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className={styles.dropdownContent}>
          <div className={styles.header}>
            <h2>Mega Menu</h2>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <h3>Category 1</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            <div className={styles.column}>
              <h3>Category 2</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            <div className={styles.column}>
              <h3>Category 3</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </div>
    );
}
