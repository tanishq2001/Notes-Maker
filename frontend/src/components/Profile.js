import React, { useState } from 'react';
import AddNote from './AddNote'; // Import AddNotes component
import ShowNotes from './ShowNotes'; // Import ShowNotes component

const Profile = () => {
    const [notes, setNotes] = useState([]);

    const handleAddNote = (note) => {
        setNotes([...notes, note]);
    };

    return (
        <div>
            <h1>Welcome To Magic Notes Profile</h1>
            <AddNote onAddNote={handleAddNote} /> {/* Ensure correct component name */}
            <hr />
            <h2>Your Notes</h2>
            <hr />
            <ShowNotes notes={notes} />
        </div>
    );
};

export default Profile;
