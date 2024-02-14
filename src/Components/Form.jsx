import { useState } from "react"

const  Form = (props) => {
    const {addExpense } = props

    const [title , setTitle] =useState('')
    const [amount, setAmount] = useState(0)
    const [errors,setErrors] = useState({})

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(title, amount)
        let err = {}
       /* if(title == '' || amount == 0){
            alert('please enter valid title and amount')
            return
        }*/
        
        if(title.length<3){
           err.title ='Title should be atleast 3 characters long'
        }
        if(!amount){
        err.amount ='Enter a valid amount'
        }
        if (Object.keys(err).length >0){
            setErrors({...err})
            return
        }
        addExpense(title, amount)
        setTitle('')
        setAmount(0)
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
        setErrors({...errors,title: ''})  
    }
    const handleAmountChange = (e) => {
        setAmount(parseInt(e.target.value))
        setErrors({...errors,amount: ''}) 
    }
    return (
    <form onSubmit={handleSubmit}>
        <div className="input-container">
        <div className="title"> Title <span className="textbox"> <input type="text"value={title} onChange={handleTitleChange}/>
        {errors.title && <div className="error">{errors.title}</div>}
       </span> </div>
        <div className="title">Amount<span className="textbox">
        <input type="number" value={amount} onChange={handleAmountChange}/>
        {errors.title && <div className="error">{errors.amount}</div>}
        </span></div>

        <button type="submit">Add Transaction</button>
        </div>
        </form>

    /*<div class="form">
    <div class="outerbox">
      <div class="reason">Title:<span class="textbox"><input type="text"/> </span></div>
      <div class="cost">Amount:<span class="textbox"><input type="text"/></span></div>
      <div class="button"><button type = "submit" >Add Transaction</button></div>
    </div>
    <div class="table" >
      <table>
        <tr>
          <td></td>  
        </tr>
      </table>

    </div>
    </div>*/
   
 
    )}     

export default Form