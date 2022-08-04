import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import Comment from "./components/comment/comment";
import Post from "./components/post/post";
import Reply from "./components/reply/reply";
import Update from "./components/update/update";

import data from "./assets/data/data.json";

function App() {
  const {
    currentUser: {
      image: { png, webp },
      username,
    },
    comments,
  } = data;
  return (
    <main className="App">
      {comments.map((comment) => {
        const { id, content, createdAt, score, user, replies } = comment;
        return (
          <Comment
            key={nanoid()}
            id={id}
            content={content}
            createdAt={createdAt}
            score={score}
            user={user}
            replies={replies}
          />
        );
      })}
      <Post />
    </main>
  );
}

export default App;

