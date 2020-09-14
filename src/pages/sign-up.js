import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./sign-in.module.scss"
import gmail from "../svg/gmail.svg"
import twitter from "../svg/twitter.svg"
import facebook from "../svg/facebook.svg"

export default function Home() {
  return (
    <Layout>
      <div className={styles.signin}>
        <h2 className={styles.signin__text}>Sign up</h2>
        <button className={styles.signin__button}>
          <img src={facebook} alt="facebook" />
          <span>Using Facebook</span>
        </button>

        <button className={styles.signin__button}>
          <img src={twitter} alt="facebook" />
          <span>Using Twitter</span>
        </button>

        <button className={styles.signin__button}>
          <img src={gmail} alt="facebook" />
          <span>Using Gmail</span>
        </button>

        <Link to="/sign-in" className={styles.signin__link}>
          Already have an account? sign in
        </Link>
      </div>
    </Layout>
  )
}
