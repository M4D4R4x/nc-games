import React, { useState } from "react";
import { patchVotesByID } from "../utils/api";

function UpdateReviewVotes(props) {
  const [hasVoted, settHasVoted] = useState(false);
  const upVotesHandler = () => {
    if (hasVoted === false) {
      props.updateVotes(1);
      patchVotesByID(props.reviewId, { inc_votes: 1 });
      settHasVoted(true);
    }
  };

  return (
    <div>
      <div>UpdateReviewVotes</div>
      <button onClick={upVotesHandler}>votes up</button>
    </div>
  );
}

export default UpdateReviewVotes;
