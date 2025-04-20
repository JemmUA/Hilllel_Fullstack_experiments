import './App.css'
import Student from "./Student.jsx";

function App() {

  return (
    <>
      <Student name={"Вася"} age={21} isStudent={true}/><hr/>
      <Student name={"Оля"} age={19} isStudent={true}/><hr/>
      <Student/>
    </>
  )
}

export default App
