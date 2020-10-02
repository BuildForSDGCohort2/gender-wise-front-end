import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./try-it.module.scss"

export default function Home() {
  const [state, setState] = useState({
    input: "",
    output: "",
    regex: new RegExp("", "gi"),
  })

  const handleInput = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  useEffect(() => {
    let matches = state.input.match(state.regex)
    let output = state.input
    matches =
      matches &&
      matches.filter((elem, i) => {
        return matches.indexOf(elem) === i
      })
    if (matches && matches.length > 0) {
      matches.forEach(async word => {
        try {
          const req = await fetch(
            `https://gender-wise.herokuapp.com/api/v1/words/word/${word}`
          )
          const res = await req.json()
          if (res.data && res.data.genderwise) {
            const reg = new RegExp(word, "gi")
            output = output.replace(reg, res.data.genderwise)
          }
          setState(state => ({ ...state, output }))
        } catch (error) {
          //  Do nothing...
        }
      })
    }
    setState(state => ({ ...state, output }))
  }, [state.input, state.regex])
  useEffect(() => {
    const kickOff = async () => {
      try {
        const req = await fetch(
          "https://gender-wise.herokuapp.com/api/v1/regex"
        )
        const res = await req.json()
        if (!res.data) {
          return setTimeout(kickOff, 3000)
        }
        const regex = new RegExp(res.data)
        setState(state => ({ ...state, regex }))
      } catch (error) {
        setTimeout(kickOff, 3000)
      }
    }
    kickOff()
  }, [])
  return (
    <Layout>
      <div className={styles.tryIt_Section}>
        <div className={styles.inputSection}>
          <h3 className={styles.inputSection__text}>Put your words here</h3>
          <textarea
            name="input"
            onChange={handleInput}
            value={state.input}
            className={styles.inputSection__textarea}
          />
        </div>

        <div className={styles.inputSection}>
          <h3 className={styles.inputSection__text}>Output</h3>
          <textarea
            name="output"
            value={state.output}
            className={styles.inputSection__textarea}
            readOnly
          />
        </div>
      </div>
    </Layout>
  )
}
