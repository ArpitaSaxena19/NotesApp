import Note from './Note';
import AddNote from './AddNote';
import Edit from './Edit';

const NotesList=({notes,handleAddNote,handleDeleteNote,handleEdit,handleToggleEdit})=>{
    return <div className="notes-list">
        
        {
        notes.map((note)=><Note note={note} handleDeleteNote={handleDeleteNote} handleEdit={handleEdit} handleToggleEdit={handleToggleEdit}/>)
        }
     <AddNote handleAddNote={handleAddNote}/>
     <Edit handleEdit={handleEdit} />
    </div>;
};


export default NotesList;