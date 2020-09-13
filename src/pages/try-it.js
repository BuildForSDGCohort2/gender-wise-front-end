import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./try-it.module.scss"

export default function Home() {
  return (
    <Layout>
      <div className={styles.tryIt_Section}>
        <div className={styles.inputSection}>
          <h3 className={styles.inputSection__text}>Put your words here</h3>
          <textarea name="" className={styles.inputSection__textarea} />
        </div>

        <div className={styles.inputSection}>
          <h3 className={styles.inputSection__text}>Output</h3>
          <textarea name="" className={styles.inputSection__textarea} />
        </div>
      </div>
    </Layout>
  )
}
