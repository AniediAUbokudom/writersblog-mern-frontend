import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import '../styles/allJournals.css'
import '../styles/generic.css'
import { Link } from 'react-router-dom';

const deleteJournalFromServer = async (uid) => {
    try {
      const response = await fetch(`http://localhost:3100/delete-journal?uid=${uid}`, {
        method: "DELETE"
      });
      const responseText = await response.text();
      alert(responseText)
    } catch (ex) {
      console.error("Delete error!");
    }
  }

const AllJournals = () => {  
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3100/read-all-journal")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          },
          (error) => {
            console.log(error)
          }
        )
    }, [])
    return (
        <div>
            <div className="allJournalBody">
                <Header></Header>
                <h2>All Journals</h2>
            </div>
            <div >
                {items.map(
                    (item) => {
                        const showPostLink="/post/"+item.uid
                        return <div className='journal-text-flex div-black-border div-border journal-text'>
                            <div>
                                {item.title}
                                <div className='journal-sub-text-body'>
                                    <p className='journal-sub-text'>{item.content}</p>
                                </div>
                            </div>
                            <div className='flex-style'>
                                <Link to={showPostLink}>
                                    <button className='button edit-button'>Edit</button>
                                </Link>
                                <button onClick={()=>deleteJournalFromServer(item.uid)} className='button delete-button'>Delete</button>
                            </div>
                        </div>
                    }
                )}
            </div>
        </div>
    );
}

export default AllJournals;
