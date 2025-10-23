import { useRef } from "react"


let UnControlled = () => {
   let InputElement = useRef() 

   let GetReferenceElement  = () => {
        InputElement.current.select()
        navigator.clipboard.writeText(InputElement.current.value)
   }
    return (
        <div>
           <label htmlFor="">Name::</label>
           <input type="text" placeholder="enter your name" className="border-2" ref={InputElement} /> <br /> <br />
           <button className="p-2 bg-red-500 text-white" onClick={GetReferenceElement}>Copy</button>
        </div>
    )
}

export default UnControlled