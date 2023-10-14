import React, { useContext } from 'react'
import { FeedbackContext } from '../Context'


const FeedbackStat = () => {
  const { feedback, average } = useContext(FeedbackContext)
  // Calculate average rating

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStat
