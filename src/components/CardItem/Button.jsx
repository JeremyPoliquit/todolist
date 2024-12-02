import React from 'react'

export default function Button({onClick}) {

  return (
    <button type='button' onClick={onClick} className='btn btn-sm bg-slate-300'>+ Add Card</button>
  )
}
