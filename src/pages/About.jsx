import React from 'react'
import ProfileCard from '../components/ProfileCard'

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This portfolio will showcase my ML + full-stack projects.</p>

      <ProfileCard
        name="Viswa Prahlad"
        role="AI & ML Engineer — Full-Stack Developer"
        email="viswaprahlad@gmail.com"
      />
    </div>
  )
}
