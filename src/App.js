 import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import Comments from "./components/Comments";
import Update from "./components/Update";

import data from "./assets/data.json";

function App() {
  return (
    <main className="App">
      {data.comments.map((comment) => {
        return (
          <Comments
            key={nanoid()}
            content={comment.content}
            createdAt={comment.createdAt}
            score={comment.score}
            avatar={comment.user.image.png}
            username={comment.user.username}
            replies={comment.replies}
          />
        );
      })}
    </main>
  );
}

export default App;
