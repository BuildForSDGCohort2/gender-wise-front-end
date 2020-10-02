import React, { useState } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./suggest.module.scss"

export default function Home() {
  const [input, setInput] = useState({
    genderwise: "",
    word: "",
  })
  const [statusText, setText] = useState("Suggest Genderwise word")

  const handleInputs = e => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const req = await fetch(
        `https://gender-wise.herokuapp.com/api/v1/words`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(input),
        }
      )
      const res = await req.json()
      if (req.status !== 200) {
        return setText(res.message)
      }
      setText("Your suggestion is recieved and has been put up for polls")
      setInput({
        genderwise: "",
        word: "",
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <div className={styles.suggest}>
        <div className={styles.suggest__text}>{statusText}</div>
        <form onSubmit={handleSubmit} className={styles.suggest__form}>
          <input
            type="text"
            name="genderwise"
            value={input.genderwise}
            onChange={handleInputs}
            className={styles.suggest__input}
            placeholder="Enter Genderwise Suggestion"
            required
          />
          <div className={styles.suggest__text}>In the place of</div>
          <input
            type="text"
            name="word"
            onChange={handleInputs}
            value={input.word}
            className={styles.suggest__input}
            placeholder="Enter Gender Sensitive word"
            required
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
