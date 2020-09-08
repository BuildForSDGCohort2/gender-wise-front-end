import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import landing_img from "../svg/landing-illutration.svg"
import styles from "./index.module.scss"

function LandingSection() {
  return (
    <div className={styles.landingSection}>
      <div>
        <img
          src={landing_img}
          alt="genderwise illustration"
          className={styles.landingSection__image}
        />
      </div>
      <div className={styles.landingSection__text}>
        <h2>
          Turn your <br /> Gender Sensitive words <br /> into Genderwise words
        </h2>
        <h3>Genderwise writing assistant</h3>
        <div>
          <Link to="/" className={styles.landingSection__link}>
            Add to chrome
          </Link>
        </div>
      </div>
    </div>
  )
}

function SampleSection() {
  return (
    <div className={styles.sampleSection}>
      <div>
        <h4 className={styles.sampleSection__title}>
          Check Gender Sensitivity
        </h4>
        <textarea
          className={styles.sampleSection__textarea}
          value="Mankind is blessed with so much resources"
        ></textarea>
      </div>
      <div>
        <h4 className={styles.sampleSection__title}>GenderWise</h4>
        <textarea className={styles.sampleSection__textarea} value="Humanity is blessed with so much resources"></textarea>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Layout>
      <LandingSection />
      <SampleSection />
    </Layout>
  )
}
