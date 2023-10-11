import React from 'react';
import Header from '../components/header'
import "../styles/createPrompt.css";


const CreateByPromptJournal = () => {
    return (
        <div className="createPromptBody">
        <Header></Header>
            <h2>Using Prompt</h2>
            <p>Some Text Here</p>
      <form className="createPromptForm">
        <label for="Date">Date:</label>
        <br></br>
        <br></br>
        <input type="date" />
        <br></br>
        <br></br>
        <p>
          <label>
            Title : <input className= "journalTitle"type="text" /> 
          </label>
        </p>
        <label for="PromptContentArea">Write Your Content Here:</label>
        <br></br><br></br>
        <textarea className="promptTextArea" rows="20" cols="80"></textarea><br></br>
        <input className="submitButtonPrompt"type="Submit" />
      </form>
        </div>
    );
}

export default CreateByPromptJournal;
