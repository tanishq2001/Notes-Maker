// ShowNotes.js
import React, { useEffect, useState } from 'react';
import api from "../api"; // Import your Axios instance

const ShowNotes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await api.get('/notes'); // Use the Axios instance
            setNotes(response.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    const deleteNote = async (noteId) => {
        try {
            await api.delete(`/notes/${noteId}`); // Adjust the endpoint as necessary
            fetchNotes(); // Refresh the notes after deletion
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    return (
        <div>
            {notes.length === 0 ? (
                <p>No notes available now</p>
            ) : (
                notes.map((note) => (
                    <div key={note._id} className="noteCard my-2 mx-2 card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{note.title}</h5>
                            <p className="card-text">{note.text}</p>
                            <button onClick={() => deleteNote(note._id)} className="btn btn-primary">Delete Note</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ShowNotes;
