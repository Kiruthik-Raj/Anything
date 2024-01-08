import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';
import { useState } from 'react';
import  Search  from './components/Search';
import Header from './components/Header';

const App = ()=> {
  const [notes,setNotes] = useState([{
    id: nanoid(),
    text:"Organize your chaos here! ",
    date: '02/01/2021',
  },
  {
    id: nanoid(),
    text:"Venom - Eminem Remix, add to 'Akuma o tokihanatsu' ",
    date: '02/01/2021',
  },
  {
    id: nanoid(),
    text:"Buy Reaver Phantom - but it can be a long wait",
    date: '02/01/2021',
  },
]);

  const [searchText, setSearchText] = useState(' ');

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote =  {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=>note.id !== id);
    setNotes(newNotes);

  }

  return ( <div className = {`${darkMode && 'dark-mode'}`}>
    <div className = "container">
    <Header handleToggleDarkMode = {setDarkMode}/>
    <Search handleSearchNote = {setSearchText}/>
    <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
      handleAddNote = {addNote}
      handleDeleteNote = {deleteNote}/>
  </div>
  </div>
   );
};

export default App;