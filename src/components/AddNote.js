import { useState } from "react";



const AddNote=({handleAddNote})=>{
    const [noteText,setNoteText]=useState('');
    const [chars,setChars]=useState(0);
    const handleChange=(event)=>{
        setNoteText(event.target.value);
        setChars(noteText.replace(/\n/g, " ").split(' ').filter(value => value != "").length);
        
        
    };
    const handleSaveClick=()=>{
        if(noteText.trim().length>0)
        {
            var withoutSpace = noteText.split(/ /g,"");
            var len = withoutSpace.length;
            console.log(len);
            
            handleAddNote(noteText);
            setNoteText('');

        }
        else{
            alert("Note is empty. To save note type something");
        }
    };
    return(<div className="note new">
        <textarea name="" id="" 
        cols="10" rows="8" 
        placeholder="Type to add new note.."
        value={noteText}
        onChange={handleChange}>
        </textarea>
        <div className="note-footer">
            <small>{chars} words</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
    );
};
export default AddNote;