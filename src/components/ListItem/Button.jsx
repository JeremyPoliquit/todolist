import React from 'react'

export default function Button({ onClick, label }) {
  return (
    <button type='button' onClick={onClick} className='btn btn-sm bg-slate-300 flex justify-start font-semibold'>{label}</button>
  )
}
