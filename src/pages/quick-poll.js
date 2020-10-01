import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./quick-poll.module.scss"

export default function Home() {
  const [polls, setPolls] = useState({
    currentPoll: 0,
    words: [],
  })

  const popSuggestion = () => {
    const wordsClone = polls.words
    const poll = wordsClone.splice(0, 1)[0]
    localStorage[poll.word] = true
    setPolls({ ...polls, words: wordsClone })
  }

  const handleVote = async (vote = false) => {
    try {
      const body = JSON.stringify({
        vote,
      })
      const req = await fetch(
        `https://gender-wise.herokuapp.com/api/v1/words/${
          polls.words[polls.currentPoll]._id
        }`,
        {
          method: "PUT",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body,
        }
      )
      if (req.status === 200) {
        popSuggestion()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    ;(async () => {
      const req = await fetch(`https://gender-wise.herokuapp.com/api/v1/polls`)
      const res = await req.json()
      if (req.status === 200) {
        const words = res.data.results.reduce((acc, cur) => {
          if (!localStorage[cur.word]) {
            acc.push(cur)
          }
          return acc
        }, [])
        setPolls(state => ({ ...state, words }))
      }
    })()
  }, [])

  return (
    <Layout>
      <div className={styles.quickPoll}>
        <p className={styles.quickPoll__paragraph}>
          Take five polls a day and Improve our algorithm for sugessting
          Genderwise words
        </p>

        <div className={styles.pollSection}>
          {!polls.words.length ? (
            <p className={styles.pollSection__text}>
              We currently have no words up for poll at the moment. You can
              either <Link to="/suggest">suggest words</Link> or check back
              later. Thanks for your time.
            </p>
          ) : (
            <>
              <p className={styles.pollSection__text}>
                <span>{polls.words[polls.currentPoll].genderwise}</span> instead
                of <span>{polls.words[polls.currentPoll].word}</span>
              </p>
              <div className={styles.pollSection__seggestion}>
                <button
                  onClick={() => handleVote(true)}
                  className={styles.pollSection__button}
                >
                  Upvote Suggestion
                </button>
                <button
                  onClick={() => handleVote(false)}
                  className={styles.pollSection__button}
                >
                  Downvote Suggestion
                </button>
              </div>

              <button
                onClick={popSuggestion}
                className={styles.quickPoll__button}
              >
                Ignore Suggestion
              </button>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}
