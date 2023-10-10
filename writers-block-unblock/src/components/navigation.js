import create from "../assets/create.jpeg";
import prompt from "../assets/prompt.png";
import allJournal from "../assets/list.png";
import { Link } from "react-router-dom";
import '../styles/navigation.css'


function Navigation() {
  const createurl = "/create";
  const createWithPrompturl = "/prompt";
  const viewJournalsurl = "/journals";
  return (
    <div>
      <h2 className="navHeader">Cure Your Writer's Block...</h2> <br></br>
      <div className="categories">
        <div>
          <img className="createJournalImage"src={create} />
          <Link className="create-journal-link" to={createurl}>
            <p className="navText">Start a Daily Journal</p>
          </Link>
        </div>
        <div>
          <img className="promptImage"src={prompt} />
          <Link className="withPrompt-link" to={createWithPrompturl}>
          <p className="navText">Use a Prompt</p>
          </Link>
        </div>
        <div>
          <img className="allJournalImage"src={allJournal} />
          <Link className="viewJournals-link" to={viewJournalsurl}> <p className="navText">All Journals</p></Link>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
