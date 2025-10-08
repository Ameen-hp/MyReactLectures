
// parameter
let Expense = ({PassTitle,PassCost,PassTodayDate}) => {
    // props = {
    //     Title:"title",
    // }
    let TodayDate  = PassTodayDate.getDate()
    return (
         <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <h1 className="text-2xl font-semibold text-gray-800 mb-3 capitalize">
        title : {PassTitle}
      </h1>
      <div className="flex items-center justify-between text-gray-600 mb-2">
        <span className="font-medium">Cost:</span>
        <span className="text-lg font-bold text-green-600">${PassCost}</span>
      </div>
      <div className="flex items-center justify-between text-gray-600">
        <span className="font-medium">Date:</span>
        <span className="text-sm text-gray-500">{TodayDate}</span>
      </div>
    </div>
    )
}

export default Expense