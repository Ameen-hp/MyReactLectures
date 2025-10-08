import Button from "./components/Button";
import Input from "./components/Input";

let Container = (props) => {

    return (
        <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl text-center w-full max-w-md">
        
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-wide drop-shadow-lg">
          Welcome 🚀
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This is your first beautiful Tailwind app.
        </p>

        {/* Input + Small Button */}
        <div className="flex gap-3 mb-6 w-full">
          <div className="flex-grow">
            <Input />
          </div>
          <Button name={props.Go}/>
        </div>

        {/* Extra big button below */}
        <div className="mt-2">
          <Button name={props.clickButton} />
        </div>
      </div>
    )
}

export default Container