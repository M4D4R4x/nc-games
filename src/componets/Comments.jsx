import React, { useEffect, useState } from "react";
import { getCommentsByID } from "../utils/api";

function Comments(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByID(props.reviewId).then((reviewFromApi) => {
      setComments(reviewFromApi);
    });
  }, [props.reviewId]);

  return (
    <main className="Comment">
      <h2>Comments</h2>
      <ul>
        {comments.map((comments) => {
          return (
            <li key={comments.comment_id}>
              <h3>comment_id: {comments.comment_id}</h3>
              <h5>author: {comments.author}</h5>
              <h5>comment:{comments.body}</h5>
              <h5>votes:{comments.votes}</h5>
              <h5>created: {comments.created_at}</h5>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Comments;
