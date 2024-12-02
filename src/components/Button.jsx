import React from 'react'

export default function Button({onClick}) {
  return (
    <button type='button' onClick={onClick} className='btn btn-sm bg-slate-100 rounded-2xl w-64 flex justify-start font-semibold text-base'>+ New Card</button>
  )
}
