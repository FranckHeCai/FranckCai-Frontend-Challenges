import { useState } from "react"
import logoMark from "../assets/images/logo-full.svg"
import { useFormContext } from "../context/FormContext"
import "./Header.css"

export function Header() {
    const { showForm, formData } = useFormContext()

    return(
        <header>
            <img src={logoMark} alt={logoMark} />
            {showForm === true
                ? (<>
                <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p>Secure your spot at next year's biggest coding conference.</p>
                </>)
                : (<>
                    <h1 className="result-title">Congrats, <span className="ticket-name">{formData["full-name"]}</span>! Your ticket is ready</h1>
                    <p className="result-paragraph">We've emailed your ticket to <span className="ticket-email">{formData["email"]}</span> and will send updates in the run up to the event</p>
                </>)

            }
                
        </header>
    )
}