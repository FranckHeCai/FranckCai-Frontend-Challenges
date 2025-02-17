import { useEffect, useState } from "react"
import AdviceCard from "./components/AdviceCard"

function App() {
  const [advice, setAdvice] = useState("") 

  const getAdvice = async () =>{
    try {
      const rest = await fetch("https://api.adviceslip.com/advice")
      const data = await rest.json()
      setAdvice(data.slip)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAdvice()
  }, [])
  

  return (
    <main className="bg-slate-900 flex justify-center items-center text-white h-screen" >
      <AdviceCard advice={advice.advice} id={advice.id} getAdvice={getAdvice}/>
    </main>
  )
}

export default App
