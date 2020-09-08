import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

const HeaderLink = props => (
  <li>
    <Link to={props.to}>{props.text}</Link>
  </li>
)

const Logo = props => (
  <Link to={props.to}>
    <div>{props.text}</div>
  </Link>
)

export default () => {
  return (
    <header className={styles.header}>
      <Logo to="/" text="Genderwise" />

      <nav>
        <ul className={styles.header__navList}>
          <HeaderLink to="/" text="Home" />
          <HeaderLink to="/" text="Try it out" />
          <HeaderLink to="/" text="Quick poll" />
          <HeaderLink to="/" text="Suggest genderwise words" />
          <HeaderLink to="/" text="Sign in" />
        </ul>
      </nav>
    </header>
  )
}
