import React from 'react'

export default function ProfileCard({ name, role, email }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '8px',
      maxWidth: '300px',
      marginTop: '1rem'
    }}>
      <h3>{name}</h3>
      <p>{role}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  )
}
