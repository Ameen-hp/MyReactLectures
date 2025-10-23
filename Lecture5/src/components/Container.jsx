

let Container  = () => {
    let Students   = [
        {
            id:123,
            name:"Muhammad zohan"
        },
        {
            id:121,
            name:"Muhammad Ayan"
        },
        {
            id:123213,
            name:"Saleem"
        }
    ]
    return (
        <div>
           {
               
               Students.map(element=> (
                   
                   <div>
                     {element.id === 121 && (  <h1>{element.name}</h1>) }
                   </div>
                     
               ))
             
           }

        </div>
    )
}

export default Container