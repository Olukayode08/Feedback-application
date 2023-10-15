import React, { createContext, useState, useEffect } from 'react'
import FeedbackData from './data/FeedbackData'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

const Context = ({ children }) => {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [rating, setRating] = useState(10)
  const [feedback, setFeedback] = useState([])
  const [btnDisabled, setbtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [feedbackEdited, setFeedbackEdited] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    )
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  // Turns button to disabled if text is less than 10 characters
  const handleTextChange = (e) => {
    if (text === '') {
      setbtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length < 10) {
      setbtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setMessage(null)
      setbtnDisabled(false)
    }
    setText(e.target.value)
  }

  // Delete feedback when I click on x
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to Delete')) {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: 'DELETE'
      })
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

    // When I click on send, it adds the feedback in the input to the feedback list
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackEdited.edit === true) {
        updateFeedback(feedbackEdited.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      setText('')
    }
  }
  // When I click on send, it adds the feedback in the input to the feedback list
  const addFeedback = async (newFeedback) => {
    // Adds the inputed text to the json data
    const response = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // To turn it into a json string
      body: JSON.stringify(newFeedback)
    })
    const data = await response.json()
    setFeedback([data, ...feedback])
  }


  // Calculating average rating
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  // Converting to 1 decimal place
  average = average.toFixed(1).replace(/[.,]0$/, '')

  // On click Edit feedback
  const editFeedback = (item) => {
    setFeedbackEdited({
      item,
      edit: true,
    })
  }
  // Update feedback text
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
    const data = await response.json()
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...data } : item
      )
    )
  }

  return (
    <>
      <FeedbackContext.Provider
        value={{
          text,
          rating,
          setRating,
          setText,
          handleSubmit,
          handleTextChange,
          message,
          btnDisabled,
          setbtnDisabled,
          feedback,
          addFeedback,
          deleteFeedback,
          average,
          editFeedback,
          feedbackEdited,
          updateFeedback,
          isLoading,
        }}
      >
        {children}
      </FeedbackContext.Provider>
    </>
  )
}

export { Context, FeedbackContext }
