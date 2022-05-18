import React from "react";
import { patchVotesByID } from "../utils/api";

function UpdateReviewVotes(props) {
  const upVotesHandler = () => {
    props.updateVotes(1);
    patchVotesByID(props.reviewId, { inc_votes: 1 });
  };
  const downVotesHandler = () => {
    props.updateVotes(-1);
    patchVotesByID(props.reviewId, { inc_votes: -1 });
  };
  return (
    <div>
      <div>UpdateReviewVotes</div>
      <button onClick={upVotesHandler}>votes up</button>{" "}
      <button onClick={downVotesHandler}>votes down</button>
    </div>
  );
}

export default UpdateReviewVotes;
