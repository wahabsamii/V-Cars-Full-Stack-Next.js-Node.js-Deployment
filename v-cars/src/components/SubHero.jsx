import Link from 'next/link'
import React from 'react'

function SubHero({title}) {
  return (
    <div className='h-[350px] flex justify-center p-6 flex-col m-4 rounded-xl bg-cover bg-center' style={{backgroundImage:`url(${'/step-bg.jpg'})`}}>
        <h1 className='text-5xl text-white font-bold'>{title}</h1>
        <p className='text-white mt-4 uppercase'><Link href={'/'} className='hover:text-red-500'>Home</Link> - {title}</p>
    </div>
  )
}

export default SubHero