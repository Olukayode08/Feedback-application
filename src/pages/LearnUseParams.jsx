import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const LearnUseParams = () => {
    const params = useParams()
    const navigate = useNavigate()
    const status = 200

const onClick = ()=>{
    navigate('/about')
}

    if(status === 404){
        return
        <Navigate to='/notfound' />
    }
  return (
    <div>
      <h1>Post {params.id}</h1>
      <h1>Name {params.name}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

export default LearnUseParams