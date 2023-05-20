
import { useState } from 'react';
import './App.css';
import List from './List';


function App() {
  const [inputList, setInputList] = useState("");
  const [listItem, setListItem] = useState([]);


  function todoListItem() {
    setListItem((oldList)=>{
      return [...oldList, inputList]
    })
    setInputList("")
  }

  const deleteItem = (id) =>{
    setListItem((oldList)=>{
      return oldList.filter((arrElm, index)=>{
        return id !== index;
      })
    })
  }

  return (
    <div className="container">
      <div className='header'>
      <h1>ToDo List</h1>
      </div>
      <div className="main">
        <input className="npt"  type="text" placeholder='Enter task here' value={inputList} onChange={(e)=>{setInputList(e.target.value)}}/>
        <button onClick={todoListItem} className="btn-add color">+</button>
      </div>
      <div>
      <ol>
        {listItem.map((itemVal, index)=>{
          return <List 
          key={index}
          id = {index}
          text={itemVal}
          onSelect={deleteItem}
          />
        })}
      </ol>
      </div>
    </div>
  );
}


export default App;