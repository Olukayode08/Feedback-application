import React, { useContext } from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
import { FeedbackContext } from '../Context'

const FeedbackItems = ({ item }) => {
  // const [rating, setRating] = useState(7)
  // const [text, settext] = useState('This is an example of a feedback item')

  // function handleClick(){
  //     setRating(10)
  // }
  //   const handleClick = () => {
  //     setRating((prev) => {
  //       return prev + 1
  //     })
  //   }

  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <>
      <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={()=>deleteFeedback(item.id)} className='close'>
          <FaTimes color='purple' />
        </button>
        <div className='text-display'>{item.text}</div>
        {/* <button onClick={()=>console.log('123')}>Click</button> */}
      </Card>
    </>
  )
}
export default FeedbackItems
