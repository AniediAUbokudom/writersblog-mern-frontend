import React from "react";
import Header from "../components/header";
import "../styles/createjournal.css";

const CreateJournal = () => {
  return (
    <div className="createJournalBody">
      <Header></Header>
      <h2>Create a Journal</h2>
      <p>Some Text Here</p>
      <form className="createJournalForm">
        <label for="Date">Date:</label>
        <br></br>
        <br></br>
        <input type="date" />
        <br></br>
        <br></br>
        <label for="Contentarea">Write Your Content Here:</label>
        <br></br><br></br>
        <textarea className="createJournalTextArea" rows="20" cols="100"></textarea><br></br>
        <input className="submitButton"type="submit" />
      </form>
    </div>
  );
};

export default CreateJournal;
