import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReviewFilter from "./ReviewFilter";
import ReviewOrder from "./ReviewOrder";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState("title");
  const [order, setOrder] = useState("DESC");
  const { category } = useParams();

  useEffect(() => {
    getReviews(category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [category]);

  const submitSortOrder = () => {
    getReviews(category, sort, order).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  };
  const selectedOrderHandler = (selectedOrderData) => {
    setOrder(selectedOrderData);
  };

  const selectedSortHandler = (seletedSortData) => {
    setSort(seletedSortData);
  };

  return (
    <main className="Reviews">
      <ReviewFilter selected={sort} selectedSortOption={selectedSortHandler} />
      <ReviewOrder
        selected={order}
        selectedOrderOption={selectedOrderHandler}
      />
      <button onClick={submitSortOrder}>sort</button>
      <h2> reviews </h2>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h3>
                <Link to={`/review/${review.review_id}`}>
                  ID:{review.review_id}
                </Link>
              </h3>
              <h3>title: {review.title}</h3>
              <img src={review.review_img_url} alt={review.review_} />
              <h5>Category:{review.category}</h5>
              <h5>comments:{review.comment_count}</h5>
              <h5>votes:{review.votes}</h5>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Reviews;
