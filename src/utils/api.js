import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://my-epic-nc-games.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.Categories;
  });
};

export const getReviews = (category, sortBy, order) => {
  const orderOption = sortBy ? `&&order=${order}` : "";
  const sortingOption = sortBy ? `&&sortBy=${sortBy}` : "";
  let path = `/reviews?Limit100`;
  if (category) path += `${sortingOption} ${orderOption}&category=${category}`;
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
    return data.comments;
  });
};

export const patchCommentVotesByID = (id, body) => {
  let path = `/comments/${id}/votes`;

  return gamesApi.patch(path, body).then(({ data }) => {
    return data.comment;
  });
};

export const postCommentByreviewId = (id, body) => {
  let path = `/reviews/${id}/comments`;

  return gamesApi.post(path, body).then(({ data }) => {
    return data.comment;
  });
};
