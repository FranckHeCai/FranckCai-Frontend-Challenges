import { useFormContext } from "../context/FormContext.jsx"

export const TicketComponent = ( ) =>{
    const { formData, resetForm } = useFormContext()

    return(
      <div className="ticket">
        <img src={formData["file-input"]} alt="avatar" width={100} />
        <h2>{formData["full-name"]}</h2>
        <p>{formData["email"]}</p>
        <p>{formData["github-user"]}</p>
        <button onClick={()=> resetForm()}>Generate another ticket</button>
      </div>
    )
  }