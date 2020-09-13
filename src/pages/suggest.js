import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./suggest.module.scss"

export default function Home() {
  return (
    <Layout>
      <div className={styles.suggest}>
        <div className={styles.suggest__text}>Suggest Gendewise word</div>
        <form className={styles.suggest__form}>
          <input
            type="text"
            className={styles.suggest__input}
            placeholder="Enter Genderwise Suggestion"
          />
          <div className={styles.suggest__text}>In the place of</div>
          <input
            type="text"
            className={styles.suggest__input}
            placeholder="Enter Gender Sensitive word"
          />
          <input
            type="submit"
            value="Suggest"
            className={styles.suggest__submit}
          />
        </form>
      </div>
    </Layout>
  )
}
