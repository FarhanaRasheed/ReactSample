import React, { useState } from 'react'

interface TodoItem {
    id: number;
    title: string;
    done: boolean;//for typescript view
}

const Todo: React.FC = () => {
    const [text, setText] = useState<string>('');//text we type-userview like plceholder,if refresh lost//***step-3***
    const [Todos, setTodos] = useState<TodoItem[]>([]);//to store the above text-//SetText,SetTodos-function//todos,text-for passing as array

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);//***step-2***,(usestate il olla value)input olla current value kittan olla function(e)-Controlled component
    }
    function handleAdd(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();//for saving when *browser reload* it doesnt old data//after submission


        if (!text.trim()) return;
        [""]
        //if added value is null,it shouldnt pass to us usestate so this fnction is used

        const newTodo: TodoItem = {
            id: Date.now(),
            title: text.trim(),
            done: false
        };//created object to store new to-do..adding new todo thingswill store to array below//if so valu are passed 

        setTodos([...Todos, newTodo]);
        setText('')//for clear textbox otherwise last added will be on text
    }
    function toggleTodo(id: number)//For striking(1st check for the todolist..when a task clicked,it checks for id as compare in above and in constNewtodo and the false become true and striked when id trigged)
    {
        setTodos(
            Todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo)
        );
    }
    function handleDelete(id: number) {
        setTodos(Todos.filter((todo) => todo.id !== id));//if  elemnt is deleted using Filter(map),the array is rebuilded without deleted element and give new array.filter is mainly working
    }
    return (
        <>
            <style>
                {`
          .todocss {
            height: 100vh;
            width: 100vw;
            background-color: lightyellow;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          h1 {
            color: white;
            font-size: 28px;
          }
        `}
            </style>
            <div className='todocss'>
                <h1 style={{ textAlign: "center", color: "greenyellow" }}>TO-DO-LIST</h1>
                <form >
                    <input type="text" value={text} placeholder='Enter todo item' onChange={handleChange}
                        style={{
                            padding: "10px",
                            borderColor: "blue",
                            borderWidth: "2px",
                            borderStyle: "solid", 
                            borderRadius: "5px",
                            marginRight: "10px"
                        }} />{/* step1 ***/}
                    <button type='submit' style={{
                        padding: "10px 15px",
                        backgroundColor: "green",
                        cursor: "pointer",
                        color: "white",
                        borderRadius: "5px",
                        border: "none"
                    }} onClick={handleAdd}>Add todo</button>
                </form>
                {Todos.length === 0 && <p>No todo items</p>}
                {/* //Logical AND */}
                <ul>
                    {Todos.map((Todo) => (
                        <li key={Todo.id} style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "300px",
                            padding: "8px",
                            backgroundColor: "white",
                            margin: "5px auto",
                            borderRadius: "5px"
                        }}>

                            <span style={{ textDecoration: Todo.done ? 'line-through' : 'none', cursor: 'pointer' }}
                                onClick={() => toggleTodo(Todo.id)}>
                                {Todo.title}
                            </span>
                            <button onClick={() => handleDelete(Todo.id)}>Delete</button>
                            {/* //when delete button invoked the above deletd function works..checks for id of the task and from the todo remove the corresponding id and returns new list */}
                        </li>
                    ))}

                </ul>


            </div>
        </>
    );
};

export default Todo
