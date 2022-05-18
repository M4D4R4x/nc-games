import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://my-epic-nc-games.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    //console.log(data.Categories);
    return data.Categories;
  });
};
//modify for desc /asc
//add to sorting as option
export const getReviews = (category, sortBy) => {
  const sortingOption = sortBy ? `&sortBy=${sortBy}` : "";
  let path = `/reviews?Limit100`;
  if (category) path += `${sortingOption}&category=${category}`;
  return gamesApi.get(path).then(({ data }) => {
    return data.reviews;
  });
};

export const getReviewsById = (id) => {
  let path = "/reviews/";
  if (id) path += `${id}`;
  return gamesApi.get(path).then(({ data }) => {
    return data.reviews;
  });
};

export const patchVotesByID = (id, body) => {
  let path = `/reviews/${id}`;

  return gamesApi.patch(path, body).then(({ data }) => {
    return data.reviews;
  });
};

export const getCommentsByID = (id) => {
  let path = `/reviews/${id}/comments`;

  return gamesApi.get(path).then(({ data }) => {
    return data.Comments;
  });
};
