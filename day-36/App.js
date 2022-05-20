import logo from './logo.svg';
import './App.css';
import { Comment } from'./component/one';

function App() {
  let comment1 = {
    text: "The biggest risk is not taking any risk.",
    profile: {
      name: "Mark Zukerberg",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUX3h1mFiI20s35RFEBnBVxjfHu9RoS7MWMm_6WacK&s"
    },
    likes: 50
  };
   let comment2={
    text: "If something's important enough, you should try.",
    profile: {
      name: "Elon Musk",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YMuEmS0OcCa75DpzYjR6Djjb5o39aMbVUKFa1Hm9&s"
    },
    likes: 45
  };
  return(
    <div>
      <Comment comment = {comment1} />
      <Comment comment = {comment2} />
    </div>
  );
}

export default App;
