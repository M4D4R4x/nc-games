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

export const getReviews = (category) => {
  let path = "/reviews?Limit100";
  if (category) path += `&category=${category}`;
  return gamesApi.get(path).then(({ data }) => {
    return data.reviews;
  });
};

export const getReviewsById = (id) => {
  let path = "/reviews/";
  if (id) path += `${id}`;
  return gamesApi.get(path).then(({ data }) => {
    console.log(data, "getreviewsbyid console");
  });
};
