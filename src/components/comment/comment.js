import React from "react";
import { nanoid } from "nanoid";
import "./comments.css";
import User from "../user/user";
import Reply from "./reply/reply";
import ReplyIcon from "../ReplyIcon";
import EditIcons from "../EditIcons";
import VotingButton from "../vote/vote";

function Comment(props) {
  const userLoggedIn = true;
  const { id, content, createdAt, score, user, replies } = props;
  return (
    <div>
      <VotingButton score={score} />
      <div>
        <div>
          <User user={user} name={username} time={createdAt} />
          {userLoggedIn ? <EditIcons /> : <ReplyIcon />}
        </div>
        <p>{content}</p>
      </div>
      <div>
        {replies.map((reply) => {
          const { id, content, createdAt, score, replyingTo, user } = reply;
          return (
            <Reply
              key={nanoid()}
              id={id}
              content={content}
              createdAt={createdAt}
              score={score}
              replyingTo={replyingTo}
              user={user}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Comment;
