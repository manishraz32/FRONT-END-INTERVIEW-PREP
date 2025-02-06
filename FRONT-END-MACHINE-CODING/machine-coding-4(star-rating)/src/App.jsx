import { useState } from 'react'
import './App.css'

function App() {
  const [maxStar, setMaxStar] = useState(5);
  const [rating, setRating] = useState(0);
  
  const handleStarClick = (value) => {
    setRating(value);
  }

  return (
    <div className="main-container">
    {Array(5).fill().map((_, index) => (
      <img
        onClick={() => handleStarClick(index+1)}
        key={index} 
        className="img"
        src={index < rating ? "star.png" : "emptystar.svg"}
        alt=""
      />
    ))}
  </div>
  
  )
}

export default App
