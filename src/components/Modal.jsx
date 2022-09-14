import React from 'react'
import Answer from './Answer'
import Spinner from './Spinner'

const Modal = ({children}) => {
  return (
    <div className='absolute w-full h-full bg-gray-900 bg-opacity-50 top-0 left-0'>
      <div className='2xl:container  py-48 px-4 md:px-24 flex justify-center items-center'>
        <div className='w-96 rounded-lg md:w-auto relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal