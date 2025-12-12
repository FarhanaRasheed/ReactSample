import React,{useState} from 'react'

interface AddItem {
  id: number;
  title: string;
}

const Task= () => {
  const [text, setText] = useState <string>('');
  const [items,setItems]=useState<AddItem[]>([]);
  // const [editid,setEditId]=useState<number|null>(null);
  

  // 1. handleChange should be OUTSIDE handleAdd
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleUpdate(id: number) {
  const itemToEdit = items.find((item) => item.id === id);
  if (itemToEdit) {
    setText(itemToEdit.title);
    setEditId(id);
  }
}
     // 2. handleAdd should NOT be inside handleChange
  function handleAdd(e: React.FormEvent) {
    
    e.preventDefault(); // prevent page reload

    if (!text.trim()) return; // avoid empty inputs

  const newItem: AddItem = {
      id: Date.now(),       // unique id
      title: text
    };

    
    setItems([...items, newItem]);   // ✅ CORRECT

    setText(''); // clear the input

  
  }
  function handleDelete(id: number) {
 setItems(items.filter((item) => item.id !== id));
    }

  return (
    <div>
      <h1>
        TO-D0-TASK
      </h1>
      <form onSubmit={handleAdd} >
        <input type="Text" value={text} placeholder='Enter item to Add' onChange={handleChange}/>
        <button
  type="submit"
>
  Add-Todo
</button>
 </form>

<ul>
  {items.map((item) => (
    <li key={item.id}>
      {item.title} 
      <button onClick={() => handleDelete(item.id)}>Delete</button>
      <button onClick={() => handleUpdate(item.id)}>Update</button>
    </li>
  ))}
</ul>


                
    </div>
  )
}

export default Task
