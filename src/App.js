import NotesList from "./components/NotesList";
import { useState,useEffect } from "react";
import {nanoid} from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";


const App=()=>{
  const [notes,setNotes]=useState([
    {
    id:nanoid(),
    text:"This is my first note",
    date:"3/09/22"
  },
  {
    id:nanoid(),
    text:"This is my second  note",
    date:"4/09/22"
  },
  {
    id:nanoid(),
    text:"This is my third note",
    date:"5/09/22"
  },
  {
    id:nanoid(),
    text:"This is my fourth note",
    date:"6/09/22"
  }

]);
const [searchText,setSearchText]=useState('');
const [darkMode,setDarkMode]=useState(false);
const [toggleEdit,setToggleEdit]=useState(true);

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
 
}, [notes])


const addNote=(text)=>{
  const date=new Date();
  const newNote={
    id: nanoid(),
    text:text,
    date:date.toLocaleDateString('en-GB'),
  }
  const newNotes=[...notes,newNote];
  setNotes(newNotes);
}
const deleteNote=(id)=>{
  const newNote=notes.filter((note)=>note.id!==id);
  setNotes(newNote);
}
const editNode=(id)=>{
  let newItemEdit=notes.find((note)=>{
         return note.id===id;
  })
  console.log(newItemEdit);
}
  return( 
  <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
    <Header handleToggleDarkMode={setDarkMode}/>
    <Search handleSearchNote={setSearchText}/>
    <NotesList notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}  handleAddNote={addNote} handleDeleteNote={deleteNote} handleEdit={editNode} handleToggleEdit={setToggleEdit}/>
    </div>
  </div>
  );
  
};
export default App;