import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/header";
import "../styles/createjournal.css";
import "../styles/generic.css";
const updateJournalFromServer = async (uid,title, content, date) => {
    const requestJson = JSON.stringify({
      title: title,
      content: content,
      date: date
    });
    try {
      const response = await fetch(`https://writersblock-backend.onrender.com/update-journal?uid=${uid}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body:requestJson,
      });
      const responseText = await response.text();
      alert(responseText)
    } catch (ex) {}
}
   
        
const PostedJournal = () => {
    const {journalId}=useParams()
    const [valueInput, setInputs] = useState({})
    useEffect(() => {
      fetch(`https://writersblock-backend.onrender.com/read-journal-byId?uid=${journalId}`)
        .then(res => res.json())
        .then(
          (result) => {
            setInputs(result);
          },
          (error) => {
            console.log(error)
          }
        )
    }, {})

    const updateChanges = (change) => {
      const name = change.target.name
      const value = change.target.value
      setInputs(values => ({
        ...values, [name]: value
      }))
    }
    return (
        <div>
            <Header></Header>
            <h1>Posted Journal</h1>
      <form className="createJournalForm">
        <label for="Date">Date:</label>
        <br></br>
        <input
          name="date"
          value={valueInput.date}
          onChange={updateChanges} readOnly/>
        <br></br>
        <br></br>
        <p>
          <label>
            Title : <input
              name="title"
              value={valueInput.title}
              onChange={updateChanges}
              className="journalTitle" type="text" />
          </label>
        </p>
        <label for="Contentarea">Write Your Content Here:</label>
        <br></br>
        <textarea
          className="createJournalTextArea"
          rows="20"
          cols="80"
          name="content"
          value={valueInput.content}
          onChange={updateChanges}
        ></textarea>
        <br></br>
        <button className="submitButtonCreate" onClick={() => updateJournalFromServer(journalId,valueInput.title, valueInput.content, valueInput.date)}>Update Journal</button>
      </form>
        </div>
    );
}

export default PostedJournal;
