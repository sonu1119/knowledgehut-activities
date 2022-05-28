import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; // useState is a hook

function Counter(props) {
  let [countLike, setLike] = useState(0); 
  let [countDislike, setDislike] = useState(0);

  let handleClick1 = (evnt) => {
    setLike(countLike++);
  }
  let handleClick2 = (evnt) => {
    setDislike(countDislike++);
  }
  return (<div>
    <h2>Count of likes and dislikes</h2>
    <div>Likes: {countLike}, Dislikes: {countDislike}</div>
    <div  className='btn btn-success'>
      <button onClick = {handleClick1}>Like</button>
    </div>
    <div className='btn btn-warning'>
      <button onClick = {handleClick2}>Dislike</button>
    </div>  
  </div>
  );
}
function App() {
  return (
    <div className = 'container-fluid'>
      <Counter />
    </div>
  );
}

export default App;
