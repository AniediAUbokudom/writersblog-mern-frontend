import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/header";
import "../styles/allJournals.css";
import Button from "../components/buttons";

const AllJournals = () => {
  const editUrl="/edit"
  return (
    <div className="allJournalBody">
      <Header></Header>
      <h2>All Journals</h2>
      <div className="actionButtons">
      <Link to={editUrl}><Button className="editButton">Edit</Button></Link> 
      <Button classname="deleteButton">Delete</Button>
      </div>
    </div>
  );
};

export default AllJournals;
