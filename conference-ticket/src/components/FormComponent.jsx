import { useFormContext } from "../context/FormContext.jsx"
import "./Form.css"

export const FormComponent = () =>{
    
    const {handleForm} = useFormContext()

    const onSubmit = (event) => {
        event.preventDefault()
        handleForm(event.target)
      }
  
    return(
      <form onSubmit={onSubmit} className="ticket-form">
          <label htmlFor="file-input">Upload Avatar
          </label>
          <input required id="file-input" type="file" accept="image/*" name="file-input"/>
          <label htmlFor="full-name">Full Name</label>
          <input id="full-name" type="text" name="full-name" required />
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required placeholder="example@email.com" />
          <label htmlFor="github-user">Github Username</label>
          <input id="github-user" name="github-user" type="text" required placeholder="@yourusername" />
          <button type="submit">Generate My Ticket</button>
        </form>

    )
  }