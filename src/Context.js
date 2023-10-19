import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

const Context = ({ children }) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ])
  const [btnDisabled, setbtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [feedbackEdited, setFeedbackEdited] = useState({
    item: {},
    edit: false,
  })

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
  // When I click on send, it adds the feedback in the input to the feedback list
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Delete feedback when I click on x
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to Delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // On click Edit feedback
  const editFeedback = (item) => {
    setFeedbackEdited({
      item,
      edit: true,
    })
  }
  // Update feedback text
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    )
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

  // Calculating average rating
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  // Converting to 1 decimal place
  average = average.toFixed(1).replace(/[.,]0$/, '')

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
        }}
      >
        {children}
      </FeedbackContext.Provider>
    </>
  )
}

export { Context, FeedbackContext }
