import React from "react"
import styles from "./layout.module.scss"
import Header from "./header"

export default ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
