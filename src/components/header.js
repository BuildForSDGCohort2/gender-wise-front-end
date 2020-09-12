import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

const HeaderLink = props => (
  <li>
    <Link to={props.to}>{props.text}</Link>
  </li>
)

const Logo = props => (
  <Link to={props.to} className={styles.header__logo}>
    <div>{props.text}</div>
  </Link>
)

export default () => {
  const nav = {
    home: { to: "/", text: "Home" },
    "try-it": { to: "/try-it", text: "Try-it-out" },
    "quick-poll": { to: "/quick-poll", text: "Quick poll" },
    suggest: { to: "/suggest", text: "Suggest Genderwise words" },
    "sign-in": { to: "/sign-in", text: "Sign in" },
  }

  console.log(Object.values(nav))

  return (
    <header className={styles.header}>
      <Logo to="/" text="GenderWise" />

      <nav>
        <ul className={styles.header__navList}>
          {Object.values(nav).map((menu, idx) => (
            <HeaderLink to={menu.to} text={menu.text} key={idx} />
          ))}
        </ul>
      </nav>
    </header>
  )
}
