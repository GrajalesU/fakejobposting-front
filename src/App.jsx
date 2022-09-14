import { useState } from "react"
import Answer from "./components/Answer"
import Modal from "./components/Modal"
import Spinner from "./components/Spinner"

function App() {
  const [description, setDescription] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [answer, setAnswer] = useState(undefined)

  const handleForm = (e) => {
    e.preventDefault()
    setShowModal(true);
    setAnswer(undefined)

    if(description === ""){
      setAnswer('Debes de escribir alguna descripción')
      return
    }

    try{
      fetch("http://0136-23-137-104-133.ngrok.io/predict", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description })
      }).then(res => res.json())
        .then(res => {
          setAnswer(res)
        })
    }
    catch(_){
      setAnswer('Internal Server Error')
    }
  }
  return (
    <div className="container max-w-5xl mx-auto px-10 flex flex-col justify-center min-h-screen ">
      <h1 className="text-5xl font-semibold">Real or fake job posting</h1>
      <h2 className="text-lg">Enter the content of the job posting and we will tell you if the offer is real or fake</h2>
      <form className="flex flex-col space-y-4 items-center justify-center" action="POST">
        <label className="block text-gray-700 text-lg self-start font-bold" htmlFor="description">
          Description:
        </label>
        <textarea
          className="w-11/12 block p-2.5 border-2 rounded h-64"
          name="description" id="description"
          placeholder="Set here the job posting..."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}>
        </textarea>
        <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 rounded w-11/12 mx-2" type="submit" onClick={handleForm}>
          SEND
        </button>
      </form>
      {showModal &&
        <Modal>
          {answer ?
            <Answer answer={answer} setDescription={setDescription} setShowModal={setShowModal} /> :
            <Spinner />}
        </Modal>}
    </div>

  )
}

export default App
