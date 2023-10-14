import React, { createContext, useState } from 'react'
import FeedbackData from './data/FeedbackData'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

const Context = ({ children }) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [feedback, setFeedback] = useState(FeedbackData)
  const [btnDisabled, setbtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === '') {
      setbtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setbtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setMessage(null)
      setbtnDisabled(false)
    }
    setText(e.target.value)
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to Delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      addFeedback(newFeedback)
      setText('')
    }
  }

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <>
      <FeedbackContext.Provider
        value={{
          text,
          rating,
          setRating,
          handleSubmit,
          handleTextChange,
          message,
          btnDisabled,
          feedback,
          addFeedback,
          deleteFeedback,
          average,
        }}
      >
        {children}
      </FeedbackContext.Provider>
    </>
  )
}

export { Context, FeedbackContext }
