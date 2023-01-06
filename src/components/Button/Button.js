import React from 'react'

export default function Button({text,width,onClick}) {

  return (
    <div className='flex justify-center'>
        <button style={{width:width}} onClick={onClick} id='btn'>{text}</button>
    </div>
  )
}
