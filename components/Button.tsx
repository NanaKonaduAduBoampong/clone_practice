import React from 'react'

interface IButtonProps {
  label: string
}

export const Button = ({label} : IButtonProps ) => {
  return (
    <button>{label.toLowerCase()}</button>
  )
}
