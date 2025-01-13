import { useFormContext } from "../context/FormContext.jsx"
import { useState } from "react"
import logoMark from "../assets/images/logo-full.svg"
import githubIcon from "../assets/images/icon-github.svg"
import "./Ticket.css"

export const TicketComponent = ( ) =>{
    const { formData, resetForm } = useFormContext()

    const [date, setDate] = useState(new Date())
    
        const formattedDate = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
    
    return(
      <>
        <div className="ticket">
          <div className="logo">
            <img src={logoMark} alt={logoMark} />
            <p>{formattedDate}</p>
          </div>
          <div className="ticket-info">
            <img src={formData["file-input"]} alt="avatar" width={100} />
            <div className="info-text">
              <h2>{formData["full-name"]}</h2>
              <div className="github">
                <img src={githubIcon} alt={githubIcon} />
                <p>{formData["github-user"]}</p>
              </div>
            </div>
          </div>
          <p className="ticket-number">#06969</p>
        </div>
        <button onClick={()=> resetForm()}>Generate another ticket</button>
      </>
    )
  }