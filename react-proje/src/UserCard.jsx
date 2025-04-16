import React from 'react'

const UserCard = ({name , email, age}) => {
  return (
    <div className='card'>
        <h2>{name}</h2>
        <p>E-posta: {email}</p>
        <p>Yaş: {age}</p>
    </div>
  )
}

export default UserCard