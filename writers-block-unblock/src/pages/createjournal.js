import React from "react";
import Header from "../components/header";
import "../styles/createjournal.css";

const CreateJournal = () => {
  return (
    <div className="createJournalBody">
      <Header></Header>
      <h2 className="createJournalHeader">Create a Journal</h2>
      <p>
        So you’ve been struggling with writers’ block?<br></br>
        Well, you're not alone!<br></br>
        One of the fastest ways to cure writers’ block is through journaling.
        <br></br>
        For 21 days, you will answer the same simple questions.<br></br> 
        You will use those answers to craft your own daily story.<br></br><br></br>
       A few Things to Keep in Mind: <br></br><br></br>
        
        1.Schedule a fixed time to write everyday.<br></br>
        2.There are no wrong or right answers.<br></br>
        3.There is only the right attitude.<br></br><br></br>
        Now here are your questions:<br></br><br></br>
        1. What time did you wake up today?<br></br>
        2. What woke you up?<br></br>
        3. What was your mood after waking up?<br></br>
        4. What did you do immediately after waking up?<br></br>
        5. What plans did you have for today?<br></br>
        6. Who was the most memorable person you met today?<br></br>
        7. What was the most memorable conversation you had today?<br></br>
        8. What other memorable thing happened today?<br></br>
        9. Was today’s plan a success?<br></br>
        10. Any quote that summarizes today. <br></br><br></br>
        ** Put all your answers together. <br></br>
        ** Don’t forget your conjunctions to help each answer flow seamlessly into
        another to create your personal story for the day. <br></br>
        ** Submit your journal <br></br><br></br>
        You're ready for tomorrow!
      </p>
      <form className="createJournalForm">
        <label for="Date">Date:</label>
        <br></br>
        <input type="date" />
        <br></br>
        <br></br>
        <p>
          <label>
            Title : <input className= "journalTitle"type="text" /> 
          </label>
        </p>
        <label for="Contentarea">Write Your Content Here:</label>
        <br></br>
        <textarea
          className="createJournalTextArea"
          rows="20"
          cols="80"
        ></textarea>
        <br></br>
        <input className="submitButtonCreate" type="Submit" />
      </form>
    </div>
  );
};

export default CreateJournal;
