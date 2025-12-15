import React, { useState } from 'react';

interface AddItem {
  id: number;
  title: string;
}

const Task = () => {
  const [text, setText] = useState<string>('');
  const [items, setItems] = useState<AddItem[]>([]);
  const [editId, setEditId] = useState<number | null>(null); // ⭐ Editing track

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();

    if (!text.trim()) return;

    // ⭐ If editing → update existing item
    if (editId !== null) {
      setItems(
        items.map((item) =>
          item.id === editId ? { ...item, title: text } : item
        )
      );
      setEditId(null); // stop editing
      setText('');
      return;
    }

    // ⭐ Else → Add new item
    const newItem: AddItem = {
      id: Date.now(),
      title: text,
    };

    setItems([...items, newItem]);
    setText('');
  }

  function handleUpdate(id: number) {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setText(itemToEdit.title); // textbox-il show
      setEditId(id); // ⭐ edit mode
    }
  }

  function handleDelete(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1>TO-DO TASK</h1>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={text}
          placeholder="Enter item"
          onChange={handleChange}
        />

        {/* ⭐ Button dynamically change cheyyum */}
        <button type="submit">
          {editId !== null ? "Update" : "Add"}
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
  );
};

export default Task;
