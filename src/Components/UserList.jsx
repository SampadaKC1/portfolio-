import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();

  return (
    <h3>User ID: {id}</h3>
  )
}

export default User