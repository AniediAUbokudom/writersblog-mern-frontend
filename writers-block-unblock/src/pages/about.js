import React from 'react';
import Header from '../components/header'
import '../styles/aboutPage.css'

const About = () => {
    return (
        <div className="aboutBody">
            <Header></Header>
            <h2 className="aboutPage">About Page</h2>
            <p className="aboutText">
                Hi, 
                Welcome to Writers-Block-Unblock.<br></br>
                As a an emerging software engineer and a creative writer who suffers from writer's block, I created this app to help users stay creative while dealing with writers' block.<br></br> <br></br>
                Oxford dictionary defines writers' block as a condition of being unable to think of what to write or how to proceed in writing.<br></br>
                Though a non-medical condition, it exists, and one of the easiest ways to cure the condition is to journal.<br></br><br></br>
                Journal is simply a diary that keeps records of thoughts and events over a period.<br></br>
                When you journal, you're not only writing, but you're taking stock of successes and failures of the past and present, and the opportunities for the future.<br></br><br></br>
                If you're suffering from writer's block, journaling is the best place to start from.<br></br>
                On Writers-block-unblock, you get the same questions for 21 days. <br></br><br></br>
                Why 21 days?<br></br>
                Well, it is said that if you do the same thing for 21 days, it becomes a habit.<br></br> Journaling for 21 days is sure to help you stay creative.<br></br><br></br>
                If you're up for a liitle more challenge, try the topic generator<br></br>
                The Topic generator is a database of quotes curated from the biggest authors all over the world.The topics will make you wonder why English is hard, but they'll make you write.<br></br><br></br>
                If you still feel stuck after 21 days, start again!<br></br>There's no penalty for starting over.<br></br><br></br>
                Ready to unblock the block? <br></br><br></br>Head over to the home page and choose a cure!
            </p>
        </div>
    );
}

export default About;
