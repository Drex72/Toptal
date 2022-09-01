import "./styles.css";
import {useEffect, useState} from 'react'

export default function App() {
  const [todo, setTodo] = useState({todo:'', completed:false,})
  const [todoItems, setTodoItems] = useState([])
  const [completedAmount, setCompletedAmount] = useState(0)
  const handleClick = () =>{
    setTodoItems([...todoItems, todo])
    setTodo({...todo,todo:''})
  }
  return (
    <div className="App">
      <input value={todo.todo} onChange={(e)=> {setTodo({...todo, todo:e.target.value})}} type="text" />
      <button disabled={todo.todo ? false : true} onClick={handleClick}>Add</button>
      <p>{completedAmount} out of {todoItems.length} elements completed</p>
      <ul>
        {todoItems.map((item) => { 
          return (
            <li className={item.completed ? 'line-through' : ''} key={item.todo} onClick={()=>{
              item.completed = !item.completed
              console.log(item.completed)
              item.completed ? setCompletedAmount(c => c + 1) : setCompletedAmount(c => c - 1)
            }}>{item.todo}</li>
          )
        })}
      </ul>
    </div>
  );
}
