import React from "react"
// import { Link } from "gatsby"  
import Layout from "../components/layout"
import styles from "./quick-poll.module.scss"

export default function Home() {
  return (
    <Layout>
      <div className={styles.quickPoll}>
        <p className={styles.quickPoll__paragraph}>
          Take five poll a day and Improve our algorithm for sugessting
          Genderwise words
        </p>

        <div className={styles.pollSection}>
          <p className={styles.pollSection__text}>
            <span>Humanity</span> instead of <span>Mankind</span>
          </p>
          <div className={styles.pollSection__seggestion}>
            <button className={styles.pollSection__button}>
              Genderwise Suggestion
            </button>
            <button className={styles.pollSection__button}>
              Neutral Suggestion
            </button>
            <button className={styles.pollSection__button}>
              Ignore Suggestion
            </button>
          </div>

          <button className={styles.quickPoll__button}>Next</button>
        </div>
      </div>
    </Layout>
  )
}
