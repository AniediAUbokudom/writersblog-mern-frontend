import React from 'react';
import Header from '../components/header'

const CreateByPromptJournal = () => {
    return (
        <div>
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
        <label for="PromptContentArea">Write Your Content Here:</label>
        <br></br><br></br>
        <textarea className="promptTextArea" rows="20" cols="100"></textarea><br></br>
        <input className="submitButton"type="submit" />
      </form>
        </div>
    );
}

export default CreateByPromptJournal;
