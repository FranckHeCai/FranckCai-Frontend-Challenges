import { useState } from 'react'
import './App.css'
import patternTicket from "./assets/images/pattern-ticket.svg"

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
      <h1>hello</h1>
      <img src={patternTicket} alt="ticket-pattern" width={200} />
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
