import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";

import { useState, useEffect } from "react";

function App() {
// State and set state of todo list
  const [toDoItems, setToDoItem] = useState([]);


// Displays todo list from mock backend (json-server)
  useEffect(() => {
    const getTodoList = async () => {
      const toDoListFromServer = await fetchTodoList();
      setToDoItem(toDoListFromServer);
    }
    getTodoList();
  }, [])


// Fetches todo list from mock backend (json-server)
const fetchTodoList = async () => {
  const response = await fetch('http://localhost:5000/toDoList');
  const data = await response.json();
  return data;
}


// Add todo item to mock backend (json-server)
const addToDoItem = async (item) => {
  const response = await fetch('http://localhost:5000/toDoList', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(item)
  });

  const data = await response.json();
  console.log(data);

  setToDoItem([...toDoItems, data]);
}


// Deletes todo text from mock backend (json-server)
const deleteToDoItem = async (id) => {
  await fetch(`http://localhost:5000/toDoList/${id}`, {
    method: 'DELETE'
  });
// Creates new array of todo items.
// When delete button is clicked, onDelete uses the todo id to identify todo.
// The new array is a list of todo itemes that do not have the id of item clicked on.
  setToDoItem(toDoItems.filter((toDo) => toDo.id !== id));
}


  return (
    <div className='container'>
      <div className='triangle'></div>
      <Header />
      <AddToDo onAdd={addToDoItem}/>
      <ToDoList toDoItems={toDoItems} onDelete={deleteToDoItem}/>
    </div>
  );
}

export default App;
