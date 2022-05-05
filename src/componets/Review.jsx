import { useEffect, useState } from "react";
import { getReviewsById } from "../utils/api";
import React from 'react'
import {useParams} from 'react-router-dom'

const Review = () => {
  const [review, setReview] = useState([]);
    const {id} = useParams()
    
    useEffect(() => {
      getReviewsById(id).then((reviewFromApi) => {
        setReview(reviewFromApi);
      });
    }, [id]);
   
   
    
  return (
    
    <main className="Review"> 
<h2>Review</h2>
<ul> 
  <h5>title:{review.title}</h5>
<h5>Category:{review.category}</h5>
<h5>Review:{review.review_body}</h5>
<h5>comments:{review.comment_count}</h5>
<img src={review.review_img_url} alt={review.review_} />

</ul>
</main>
    
  )
}

export default Review