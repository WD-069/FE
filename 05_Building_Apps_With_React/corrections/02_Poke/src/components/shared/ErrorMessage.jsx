import React from 'react'

function ErrorMessage({message}) {
  return (
    <div>
        <p className='text-red-700'>Error! {message}</p>
    </div>
  )
}

export default ErrorMessage