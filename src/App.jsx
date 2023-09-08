import React,{useState} from 'react'
import './App.css'


function App() {
 const [task,setTask] = useState("")
 const [todo,setTodo] = useState([])
 const [status,setStatus] = useState(0)

 const add=()=>{
  const data = [task,"incomplete"]
  task ?
  setTodo([
    ...todo,data
  ])
  
  :
  console.log("Error adding task. Enter any values")
  
 }
//  console.log(todo);

const deleteTask=(key)=>{
    const newArr = todo.filter((item)=>{
      return item!= key
    })
    setTodo(newArr)
}

  return (
   <div className='container'>
        <div className='todo'>
              <h2 className='title'>To-Do List <i className="fa-solid fa-note-sticky fa-shake"></i></h2>
              <div className='search'>
                  <input type="text" placeholder='Enter any Task' onChange={(e)=>setTask(e.target.value)} />
                  <button onClick={add}>Add <i className="fa-solid fa-circle-plus"></i></button>
              </div>
        </div>
          {
            todo.length==0 ?
            <h1 className='noitem'>No item <i className="fa-solid fa-cart-shopping fa-l" />
            </h1>
            :
          
        <div className="result">
          {
            todo.map((item,index)=>{
              console.log(item)
              return(
              <div className='task' key={index}>
                  <h1 className='each'
                  
                   style={item[1]=="completed" ? { textDecoration: "line-through" } : {textDecoration:"none"}}
                   >{item[0]}</h1>
                  <div className='actions'>
                  <i className="fa-solid fa-check fa-lg" id='edit' style={{ color: "#00ff04" }} onClick={()=>{
                    item[1]="completed"
                    setStatus(status+1)
                  }}/>
                  <i className="fa-solid fa-trash fa-lg" id='trash' style={{ color: "#ff0000" }} onClick={()=>{
                      deleteTask(item)
                  }} />
                  </div>
            </div>
              )
            })
          }
            
        </div>
}
   </div>
  )
}

export default App
