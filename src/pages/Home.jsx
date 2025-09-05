import React, { useState, useEffect } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(() => new Date().toLocaleTimeString())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome — this is the portfolio skeleton.</p>

      <p><strong>Live clock:</strong> {time}</p>

      <button onClick={() => setCount(c => c + 1)}>
        Click me ({count})
      </button>
    </div>
  )
}
