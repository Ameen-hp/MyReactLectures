import Expense from "./components/Expense";

let App = () => {
  let Expenses = [
    {
      title:"Books",
      cost:5,
      date: new Date("2025-10-2")
    },
    {
      title:"Pizza",
      cost:4,
      date:new Date("2025-10-3")
    },
    {
      title:"Game",
      cost:3,
      date:new Date("2025-10-4")
    }
  ]
  
  return (
     <div>
      arguement
        
        <Expense PassTitle={Expenses[0].title} PassCost={Expenses[0].cost}  PassTodayDate={Expenses[0].date} />
        
        <Expense PassTitle={Expenses[1].title} PassCost={Expenses[1].cost} PassTodayDate={Expenses[1].date} />
         <Expense PassTitle={Expenses[2].title} PassCost={Expenses[2].cost} PassTodayDate={Expenses[2].date} />

        
     </div>
  );
};

export default App;
