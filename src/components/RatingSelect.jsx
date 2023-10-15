import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { FeedbackContext } from '../Context'



const RatingSelect = ({select}) => {
  const [selected, setSelected] = useState(10)

  const {feedbackEdited} = useContext(FeedbackContext)

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  useEffect(()=>{
    setSelected(feedbackEdited.item.rating)
  }, [feedbackEdited])


  return (
    <>
      <ul className='rating'>
        <li>
          <input
            type='radio'
            checked={selected === 1}
            name='rating'
            id='num1'
            value='1'
            onChange={handleChange}
          />
          <label htmlFor='num1'>1</label>
        </li>
        <li>
          <input
            type='radio'
            checked={selected === 2}
            name='rating'
            id='num2'
            value='2'
            onChange={handleChange}
          />
          <label htmlFor='num2'>2</label>
        </li>
        <li>
          <input
            type='radio'
            checked={selected === 3}
            name='rating'
            id='num3'
            value='3'
            onChange={handleChange}
          />
          <label htmlFor='num3'>3</label>
        </li>
        <li>
          <input
            type='radio'
            checked={selected === 4}
            name='rating'
            id='num4'
            value='4'
            onChange={handleChange}
          />
          <label htmlFor='num4'>4</label>
        </li>
        <li>
          <input
            type='radio'
            checked={selected === 5}
            name='rating'
            id='num5'
            value='5'
            onChange={handleChange}
          />
          <label htmlFor='num5'>5</label>
        </li>
        <li>
          <input
            type='radio'
            checked={selected === 6}
            name='rating'
            id='num6'
            value='6'
            onChange={handleChange}
          />
          <label htmlFor='num6'>6</label>
        </li>
        <li>
          <input
            type='radio'
            checked={selected === 7}
            name='rating'
            id='num7'
            value='7'
            onChange={handleChange}
          />
          <label htmlFor='num7'>7</label>
        </li>
        <li>
          <input
            type='radio'
            checked={selected === 8}
            name='rating'
            id='num8'
            value='8'
            onChange={handleChange}
          />
          <label htmlFor='num8'>8</label>
        </li>
        <li>
          <input
            type='radio'
            checked={selected === 9}
            name='rating'
            id='num9'
            value='9'
            onChange={handleChange}
          />
          <label htmlFor='num9'>9</label>
        </li>
        <li>
          <input
            type='radio'
            checked={selected === 10}
            name='rating'
            id='num10'
            value='10'
            onChange={handleChange}
          />
          <label htmlFor='num10'>10</label>
        </li>
      </ul>
    </>
  )
}

export default RatingSelect
