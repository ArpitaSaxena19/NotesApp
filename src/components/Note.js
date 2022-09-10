import {MdDeleteForever} from 'react-icons/md';


const Note=({note,handleDeleteNote,handleEdit,handleToggleEdit})=>{
    return ( <div className="note">
        <span className='edit'>{note.text} 
        {/*<button className="save" onClick={()=>{
            handleEdit(note.id)
        }} disabled>Edit</button>*/}
        </span>
        <div className="note-footer">
            <small>{note.date}</small>
            <MdDeleteForever className='delete-icon' size='1.3em' onClick={()=>{
                handleDeleteNote(note.id)
            }} />
            
        </div>
    </div>
    );
};


export default Note;