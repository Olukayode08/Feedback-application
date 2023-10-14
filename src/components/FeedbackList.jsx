import React, { useContext } from 'react'
import FeedbackItems from './FeedbackItems'
import {motion, AnimatePresence} from 'framer-motion'
import { FeedbackContext } from '../Context'

const FeedbackList = () => {
  const {feedback, deleteFeedback} = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }
  return (
    <>
      <div className='feedback-list'>
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItems
                key={item.id}
                item={item}
                deleteFeedback={deleteFeedback}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

export default FeedbackList
