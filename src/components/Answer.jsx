import React from 'react'

const Answer = ({ answer, setShowModal, setDescription }) => {
  const handleReset = () =>{
    setShowModal(false)
    setDescription("")
  }
  return (
    <div className='space-y-10'>
      <h3 className="text-6xl">{ answer }</h3>
      <button 
      className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-8 rounded w-11/12 mx-2 uppercase"
      onClick={handleReset}>
        Try with another job posting
      </button>
    </div>
  )
}

export default Answer