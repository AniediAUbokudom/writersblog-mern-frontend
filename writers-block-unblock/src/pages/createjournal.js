import React, { useState } from "react";
import Header from "../components/header";
import "../styles/createjournal.css";
import "../styles/generic.css";

const createJournalFromServer = async (title, content, date) => {
  const requestJson = JSON.stringify({
    title: title,
    content: content,
    date: date
  });
  try {
    const response = await fetch("https://writersblock-backend.onrender.com/create-journal", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:requestJson,
    });
    const responseText = await response.text();
    alert(responseText)
  } catch (ex) {
    console.error("POST error!");
  }
}

const CreateJournal = () => {
  const questions = [
    "What time did you wake up today?",
    "What woke you up?",
    "What was your mood after waking up?",
    "What did you do immediately after waking up?",
    "What plans did you have for today?",
    "Who was the most memorable person you met today?",
    "What was the most memorable conversation you had today?",
    "What other memorable thing happened today?",
    "Was today’s plan a success?",
    "Any quote that summarizes today."
  ]

  const [valueInput, setInputs] = useState({})
  const updateChanges = (change) => {
    const name = change.target.name
    const value = change.target.value
    setInputs(values => ({
      ...values, [name]: value
    }))
  }
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
        <div className="flex-style">
          {
            questions.map((item) => {
              return <div className="div-border div-black-border"><p className="p-color">{item}</p></div>
            }
            )}
        </div>
        ** Put all your answers together. <br></br>
        ** Don’t forget your conjunctions to help each answer flow seamlessly into
        another to create your personal story for the day. <br></br>
        ** Submit your journal <br></br><br></br>
        You're ready for tomorrow!
      </p>
      <form className="createJournalForm">
        <label for="Date">Date:</label>
        <br></br>
        <input
          name="date"
          value={valueInput.date}
          onChange={updateChanges}
          type="date" />
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
        <button className="submitButtonCreate" onClick={() => createJournalFromServer(valueInput.title, valueInput.content, valueInput.date)}>Submit</button>
      </form>
    </div>
  );
};

export default CreateJournal;
