import React from "react";
import { nanoid } from "nanoid";
import User from "./User";
import Reply from "./Reply";
import ReplyIcon from "./ReplyIcon";
import EditIcons from "./EditIcons";
import VotingButton from "./VotingButton";

function Comments(props) {
  const userLoggedIn = true;
  return (
    <div>
      <VotingButton score={props.score} />
      <div>
        <div>
          <User
            avatar={props.avatar}
            name={props.username}
            time={props.createdAt}
          />
          {userLoggedIn ? <EditIcons /> : <ReplyIcon />}
        </div>
        <p>{props.content}</p>
      </div>
      <div>
        {props.replies.map((reply) => {
          return (
            <Reply
              key={nanoid()}
              content={reply.content}
              createdAt={reply.createdAt}
              score={reply.score}
              avatar={reply.user.image.png}
              username={reply.user.username}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
