import React, { useState } from 'react';

const AddNote = ({ onAddNote }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleAddNote = () => {
        if (title.trim() === '' || text.trim() === '') {
            alert('Title and Note cannot be empty!');
            return;
        }
        
        const newNote = {
            title: title,
            text: text
        };

        onAddNote(newNote);  // Send the new note to the parent component

        // Reset input fields
        setTitle('');
        setText('');
    };

    return (
        <div className="card">
            <div className="card-body">
                <div className="mb-3">
                    <h5 className="card-title">Add Title</h5>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>

                <h5 className="card-title">Add a note</h5>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        rows="3" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                    />
                </div>
                <br />
                <button className="btn btn-primary" onClick={handleAddNote}>
                    Add Note
                </button>
            </div>
        </div>
    );
};

export default AddNote;
