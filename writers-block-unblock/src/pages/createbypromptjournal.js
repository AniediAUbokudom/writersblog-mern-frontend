import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import "../styles/createPrompt.css";


const CreateByPromptJournal = () => {
  const [item, setItems] = useState({});
  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke", {
      method: 'GET',
    })
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          console.log(error)
        }
      )
  }, {})
  return (
    <div className="createPromptBody">
      <Header></Header>
      <h2>Using Prompt</h2>
      <div className="flex-style">
        <div className="div-border div-black-border"><p className="p-color">{item.setup}</p></div>
        <button onClick={()=>reloadPage()}>Refresh</button>
      </div>

      <form className="createPromptForm">
        <label for="Date">Date:</label>
        <br></br>
        <br></br>
        <input type="date" />
        <br></br>
        <br></br>
        <p>
          <label>
            Title : <input className="journalTitle" type="text" />
          </label>
        </p>
        <label for="PromptContentArea">Write Your Content Here:</label>
        <br></br><br></br>
        <textarea className="promptTextArea" rows="20" cols="80"></textarea><br></br>
        <input className="submitButtonPrompt" type="Submit" />
      </form>
    </div>
  );
}

export default CreateByPromptJournal;
