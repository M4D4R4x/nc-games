import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { postCommentByreviewId } from "../../utils/api";

function PostComment({ updateReviewComments }) {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const { user } = useAuth();
  // need input handler and submit handler and state

  const onChangeHandler = (event) => {
    setNewComment(event.target.value);
  };
  console.log(newComment);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    postCommentByreviewId(id, { body: newComment, username: user }).then(
      (response) => {
        updateReviewComments(response);
        console.log(response);
        setNewComment("");
      }
    );
    console.log("SUBMITTED");
  };

  return (
    <div>
      <div>PostComment</div>
      <input
        type="text"
        placeholder="Comment"
        onChange={onChangeHandler}
        value={newComment}
      />
      <button onClick={onSubmitHandler}> post </button>
    </div>
  );
}

export default PostComment;
