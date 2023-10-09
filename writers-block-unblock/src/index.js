import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import About from './pages/about';
import CreateJournal from './pages/createjournal';
import CreateByPromptJournal from './pages/createbypromptjournal';
import AllJournals from './pages/alljournals';
import PostedJournal from './pages/postedjournal';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
     <Route path="/" element={<App></App>}/>  {/* App Route */}
     <Route path="/about" element={<About></About>}/>  {/* About Route */}
     <Route path="/create" element={<CreateJournal></CreateJournal>}/>  {/* Create Journal Route */}
     <Route path="/prompt" element={<CreateByPromptJournal></CreateByPromptJournal>}/>  {/* Writing Promp Route */}
     <Route path="/journals" element={<AllJournals></AllJournals>}/>  {/* All Journals Route */}
     <Route path="/post/:journalId" element={<PostedJournal></PostedJournal>}/>  {/* All Journals Route */}
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
