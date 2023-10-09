import create from '../assets/create.jpeg'
import prompt from '../assets/prompt.png'
import allJournal from '../assets/list.png'

function Navigation(){
    return(
        <div>
            <h3>Choose a starting point...</h3>
            <div>
                <div>
                    <img src={create}/>
                    <p>Create a journal</p>
                </div>
                <div>
                    <img src={prompt}/>
                    <p>Use a Prompt</p>
                </div>
                <div>
                    <img src={allJournal}/>
                    <p>All Journals</p>
                </div>
            </div>
        </div>
    )
}
export default Navigation;
