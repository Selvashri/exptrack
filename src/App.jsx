import { useEffect, useState } from "react"
import ExpenseItem from "./Components/ExpenseItem"
import Form from "./Components/Form"
import axios from "axios"

const App = () => {
   
  const [expenses , setExpenses ] = useState([])
         //{id:1, title: "Food", amount: 500},
         //{id:2, title: "Movie", amount: -200},
         //{id:3, title: "Salary", amount: 2000}
  useEffect(()=>{
    axios.get('https://expenseapinode.onrender.com/get-entries')
    .then(res => {
      console.log(res.data)
      setExpenses(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  const addExpense = (title , amount) => {
    const nextId = expenses[expenses.length - 1].id + 1
    setExpenses([...expenses, { id : nextId, title : title, amount : amount}])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id))
  }

  let income = 0
  let expense=0
  expenses.forEach((exp) => {
    if(exp.amount > 0){
      income += exp.amount  
    }else{
      expense += exp.amount
    }
  });
  let balance = income + expense
  return (
    <>
    <Form addExpense={addExpense}/>
    <div >
      <div className="exptrack">Expense Tracker</div>
       <div className="balance">Balance:{balance}</div>
       <div className="income-expense-container">
        <div className="income">
          <span className="title">Income</span>
          <span>{income}</span>
        </div>
        <div className="block"></div>
        <div className="expense">
          <span className="title">Expense</span>
          <span>{expense}</span>
        </div>
       </div>
    </div>
    {expenses.map((expense) =>(
    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} deleteExpense={deleteExpense} id={expense.id}/>
    
    ))}
    </>
  )
}


export default App