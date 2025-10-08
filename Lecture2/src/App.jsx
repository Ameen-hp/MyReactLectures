
import Container from "./Container";

let App = () => {

    let firstButton = "Click me";
    let SecondButton = "Go"

  return (
    <div className="flex justify-center flex-col items-center h-screen bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
        <Container  clickButton = {firstButton} Go={SecondButton}/>
    </div>
  );
};

export default App;
