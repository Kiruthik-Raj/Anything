import { useState } from "react";

const AddNote = ( {handleAddNote} ) => {
    const [noteText,setnoteText] = useState('');

    const characterLimit = 200;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0)
        {
            setnoteText(event.target.value);
        }
    };

    const handleCreateClick = () => {
        if(noteText.trim().length > 0)
        {
            handleAddNote(noteText);
            setnoteText('');
        }
        handleAddNote(noteText);
    }
    return (<div className = "note new">
        <textarea rows = '8'
                  cols='10'
                  placeholder="Organize your chaos here... "
                  value={noteText}
                  onChange={handleChange}
                  ></textarea>
        <div className = "note-footer">
            <small>{characterLimit - noteText.length} remaining</small>
            <button className = "create" onClick={handleCreateClick}>Create</button>
        </div>
    </div>)
}

export default AddNote;