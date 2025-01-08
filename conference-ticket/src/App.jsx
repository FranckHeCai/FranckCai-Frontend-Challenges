import './App.css'
import logoMark from "./assets/images/logo-full.svg"
import lineBottom from "./assets/images/pattern-squiggly-line-bottom.svg"
import lineTop from "./assets/images/pattern-squiggly-line-top.svg"
import circle from "./assets/images/pattern-circle.svg"
import lines from "./assets/images/pattern-lines.svg"
import { FormComponent } from "./components/FormComponent"
import { TicketComponent } from "./components/TicketComponent"
import { Header } from './components/Header'
import { FormProvider, useFormContext } from './context/FormContext.jsx'

function App() {
  const { showForm } = useFormContext()

  return (
    <>
      <img className="lineBottom absolute" src={lineBottom} alt={lineBottom} />
      <img className="lineTop absolute" src={lineTop} alt={lineTop} />
      <img className="lines absolute" src={lines} alt={lines} />
      <img className="circle absolute" src={circle} alt={circle} />
      <img className="circle2 absolute" src={circle} alt={circle} />

      <Header />
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
