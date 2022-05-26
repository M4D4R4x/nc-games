import React, { useState } from "react";
import { patchCommentVotesByID } from "../utils/api";
function UpdateCommentVotes(props) {
  const [hasVoted, settHasVoted] = useState(false);
  const upCommentVotesHandler = () => {
    if (hasVoted === false) {
      props.updateStateCommentVotes(props.comment_id, 1);
      patchCommentVotesByID(props.commentId, { inc_votes: 1 });
      settHasVoted(true);
    }
  };
  console.log(props);
  return (
    <div>
      <div>UpdateCommentVotes</div>
      <button onClick={upCommentVotesHandler}>Comment votes up</button>
    </div>
  );
}

export default UpdateCommentVotes;
