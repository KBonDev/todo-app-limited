import React,{useState} from 'react'
// last commit github checking

function TodoList() {
    const [todo,setTodo]=useState('');
    const [Todos,setTodos]=useState([ ]);
    const AddTodo=()=>{
        setTodos([...Todos,todo]);
        setTodo('');
    }
    const deleteTodo=(inn)=>{
      setTodos(Todos.filter((_,index) =>index !== inn));
    }
  return (
  <div className='card mh-100  '>
    <div className='card-body'>
    <h1 className='text-danger border rounded bg-green'>Todo App</h1>
   <div className='d-flex flex-row'>
     <input onChange={e=>setTodo(e.target.value)} className='input-box form-control 'value={todo} placeholder='Enter the Todo'></input>
    <button onClick={AddTodo} className='btn bg-danger'>Add</button>
 
    </div> 
    <div className=' rounded .h-25 '>
    <ul className='list-group mw-100'>
    {Todos.map((todo,index)=>(
      <div key={index} className='d-flex  w-100 m-2'>
        <li className='list-group-item flex-grow-1'>{todo}</li>
        <button onClick={()=>deleteTodo(index)} className='btn bg-danger ms-2'>X</button>
      </div>
      
    ))}
    

    </ul>
    </div>
    </div>
    </div>
  )
}

export default TodoList