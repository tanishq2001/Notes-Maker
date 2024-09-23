import React, { useState } from 'react';
// import QuestionPaper from './QuestionPaper'; // Import QuestionPaper component
// import Notes from './Notes'; // Import Notes component
// import Feedback from './Feedback'; // Import Feedback component

const Home = () => {
    const [selectedSection, setSelectedSection] = useState("questionPapers"); // Default section

    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <button onClick={() => setSelectedSection("questionPapers")}>Question Papers</button>
            <button onClick={() => setSelectedSection("notes")}>Notes</button>
            <button onClick={() => setSelectedSection("feedback")}>Feedback</button>

            {/* {selectedSection === "questionPapers" && <QuestionPaper />}
            {selectedSection === "notes" && <Notes />}
            {selectedSection === "feedback" && <Feedback />} */}
        </div>
    );
};

export default Home;