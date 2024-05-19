import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber , decNumber } from "./actions/index"

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Welcome to Redux</h1>
      <div style={{display:'flex' , gap:'10px'}}>
        <div style={{fontSize:'100px' , cursor:'pointer'}} onClick={ () => dispatch(decNumber())}>-</div>
        <div style={{fontSize:'100px'}}>{myState}</div>
        <div style={{fontSize:'100px' , cursor:'pointer'}} onClick={ () => dispatch(incNumber(5))}>+</div>
      </div>
    </div>
  )
}

export default App
