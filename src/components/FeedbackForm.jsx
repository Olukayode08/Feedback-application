import React, { useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './Button'
import RatingSelect from './RatingSelect'
import { FeedbackContext } from '../Context'

const FeedbackForm = ({isDisabled}) => {
  const {
    message,
    setText,
    text,
    handleSubmit,
    feedbackEdited,
    handleTextChange,
    // setbtnDisabled,
    btnDisabled,
    setRating,
  } = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdited.edit === true) 
    setText(feedbackEdited.item.text)
    setRating(feedbackEdited.item.rating)
    // setbtnDisabled(false)
  }, [feedbackEdited])

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us</h2>
          {/* rating component */}
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className='input-group'>
            <input
              onChange={handleTextChange}
              value={text}
              type='text'
              placeholder='Write a review'
            />
            <Button type='submit' isDisabled={btnDisabled} version='secondary'>
              Send
            </Button>
          </div>
          {message && <div className='message'>{message}</div>}
        </form>
      </Card>
    </>
  )
}

export default FeedbackForm
