import React from 'react'
import FeedbackForm from '../components/FeedbackForm'
import FeedbackStat from '../components/FeedbackStat'
import FeedbackList from '../components/FeedbackList'

const Feedbackpage = () => {

  return (
    <>
      <div className='container'>
        <FeedbackForm  />
        <FeedbackStat />
        <FeedbackList />
      </div>
    </>
  )
}

export default Feedbackpage