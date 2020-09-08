import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import landing_img from "../svg/landing-illutration.svg"
import gmail from "../svg/gmail.svg"
import messenger from "../svg/messenger.svg"
import yahoo from "../svg/yahoo.svg"
import outlook from "../svg/outlook.svg"
import twitter from "../svg/twitter.svg"
import medium from "../svg/medium.svg"
import linkedin from "../svg/linkedin.svg"
import facebook from "../svg/facebook.svg"
import google_docs from "../svg/google-docs.svg"
import slack from "../svg/slack.svg"
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

function SampleTextarea({ title, input }) {
  return (
    <div>
      <h4 className={styles.sampleSection__title}>{title}</h4>
      <textarea
        className={styles.sampleSection__textarea}
        value={input}
      ></textarea>
    </div>
  )
}

function SampleSection() {
  return (
    <div className={styles.sampleSection}>
      <SampleTextarea
        title="Check Gender Sensitivity"
        input="Mankind is blessed with so much resources"
      />
      <SampleTextarea
        title="GenderWise"
        input="Humanity is blessed with so much resources"
      />
    </div>
  )
}

function UsecaseSection({ text, image }) {
  function Icon({ icon }) {
    return (
      <div>
        <img src={icon} alt="" />
      </div>
    )
  }

  return (
    <div className={styles.usecaseSection}>
      <h3 className={styles.usecaseSection__text}>{text}</h3>
      <div className={styles.usecaseSection__icon}>
        {image.map((icon, index) => (
          <Icon icon={icon} key={index} />
        ))}
      </div>
    </div>
  )
}

function Footer() {
  return <div className={styles.footer}>2020 &copy; GenderWise</div>
}

export default function Home() {
  return (
    <Layout>
      <LandingSection />
      <SampleSection />
      <UsecaseSection
        text="Emails and Messages"
        image={[gmail, messenger, yahoo, outlook]}
      />
      <UsecaseSection
        text="Social Media, Articles and Blogposts"
        image={[twitter, medium, linkedin, facebook]}
      />
      <UsecaseSection
        text="Projects and Documents"
        image={[google_docs, slack]}
      />

      <Footer />
    </Layout>
  )
}
