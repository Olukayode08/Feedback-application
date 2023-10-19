import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FeedbackContext } from '../Context'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'

const FeedbackList = () => {
  const { feedback, deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card>
              <div className='num-display'>{item.rating}</div>
              <button onClick={() => deleteFeedback(item.id)} className='close'>
                <FaTimes color='purple' />
              </button>
              <button onClick={() => editFeedback(item)} className='edit'>
                <FaEdit color='purple' />
              </button>
              <div className='text-display'>{item.text}</div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
