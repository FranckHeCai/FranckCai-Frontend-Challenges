import { useState } from 'react'
import './App.css'
import logoMark from "./assets/images/logo-full.svg"
import lineBottom from "./assets/images/pattern-squiggly-line-bottom.svg"
import lineTop from "./assets/images/pattern-squiggly-line-top.svg"
import circle from "./assets/images/pattern-circle.svg"
import lines from "./assets/images/pattern-lines.svg"

function App() {
  const [formData, setFormData] = useState({})
  const [showForm, setShowForm] = useState(true)



  const handleSubmit = (event) =>{
    event.preventDefault()
    const data = new FormData(event.target)
    const retrievedData = Object.fromEntries(data)
    retrievedData['file-input'] = URL.createObjectURL(data.get('file-input'))
    setFormData(retrievedData)
    setShowForm(false)
  }

  const isFormDataNotEmpty = Object.keys(formData).length > 0

  const FormComponent = () =>{
    return(
      <form onSubmit={handleSubmit} className="ticket-form">
          <label htmlFor="file-input">Upload Avatar</label>
          <input required id="file-input" type="file" accept="image/*" name="file-input"/>
          <label htmlFor="full-name">Full Name</label>
          <input id="full-name" type="text" name="full-name" required />
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="github-user">Github Username</label>
          <input id="github-user" name="github-user" type="text" required />
          <button type="submit">Generate My Ticket</button>
        </form>
    )
  }

  const TicketComponent = () =>{
    return(
      <div className="ticket">
        <img src={formData["file-input"]} alt="avatar" width={100} />
        <h2>{formData["full-name"]}</h2>
        <p>{formData["email"]}</p>
        <p>{formData["github-user"]}</p>
        <button onClick={()=> {
          setFormData({})
          setShowForm(true)
          }}>Generate another ticket</button>
      </div>
    )
  }

  return (
    <>
      <img className="lineBottom absolute" src={lineBottom} alt={lineBottom} />
      <img className="lineTop absolute" src={lineTop} alt={lineTop} />
      <img className="lines absolute" src={lines} alt={lines} />
      <img className="circle absolute" src={circle} alt={circle} />
      <img className="circle2 absolute" src={circle} alt={circle} />
      <header>
        <img src={logoMark} alt="ticket pattern" />
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p>Secure your spot at next year's biggest coding conference</p>
      </header>
      <main>
        {showForm === true
          ? <FormComponent />
          : <TicketComponent />
        }
      </main>
    </>
  )
}

export default App
