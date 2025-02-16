import { useState } from "react"
import Base from "./components/Base"
import Success from "./components/Success"
function App() {
  const [filled, setFilled] = useState(false)
  const [mail, setMail] = useState("")

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center *:box-border *:text-[var(--blue800)]">
      {filled
        ? (<Success setFilled={setFilled} mailName={mail} />)
        : (<Base setFilled={setFilled} mail={mail} setMail={setMail} />)
      }
      <div className="attribution text-white mt-3">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </main>
  )
}

export default App
