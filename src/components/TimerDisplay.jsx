import React from 'react'
import './TimerDisplay.css'

const TimerDisplay = ({time}) => {
  return (
    <div className='timer-display'>
      {time}
    </div>
  )
}

export default TimerDisplay
