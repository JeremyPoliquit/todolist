import React from 'react'

export default function Navbar({title}) {
  return (
    <nav className='container flex justify-start items-center max-w-full py-4 px-4 bg-slate-700 text-white'>
        <h1 className='font-semibold text-xl'>{title}</h1>
    </nav>
  )
}
