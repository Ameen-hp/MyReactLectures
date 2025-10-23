import Container from "./components/Container"
import Controlled from "./components/Controlled.jsx"
import UnControlled from "./components/UnControlled.jsx"
import Form from "./components/Form.jsx"
let App = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-y-10 mt-10">
     <h1 className="text-4xl text-brown-500">Student Data</h1>
      {/* <h1 className="text-4xl text-blue-500">
         <Container />
         <Controlled />
         
      </h1>
      <UnControlled /> */}
      <Form />
    </div>
  )
}

export default App