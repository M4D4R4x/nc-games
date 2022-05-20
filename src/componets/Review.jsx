import { useEffect, useState } from "react";
import { getReviewsById } from "../utils/api";
import React from "react";
import { useParams } from "react-router-dom";
import UpdateReviewVotes from "./UpdateReviewVotes";
import ReviewComments from "./ReviewComments";

const Review = () => {
  const [review, setReview] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getReviewsById(id).then((reviewFromApi) => {
      setReview(reviewFromApi);
    });
  }, [id]);
  const updateVotes = (voteInt) => {
    setReview((prev) => ({ ...prev, votes: review.votes + voteInt }));
  };

  return (
    <main className="Review">
      <h2>Review</h2>
      <ul>
        <h5>title:{review.title}</h5>
        <h5>Category:{review.category}</h5>
        <h5>Review:{review.review_body}</h5>
        <h5>comments:{review.comment_count}</h5>
        <img src={review.review_img_url} alt={review.review_} />
        <h5>votes :{review.votes}</h5>
        <UpdateReviewVotes
          votes={review.votes}
          updateVotes={updateVotes}
          reviewId={id}
        />
        <ReviewComments reviewId={id} />
      </ul>
    </main>
  );
};

export default Review;
