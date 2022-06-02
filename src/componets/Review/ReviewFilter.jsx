import React from "react";

function ReviewFilter(props) {
  const sortChangeHandler = (event) => {
    props.selectedSortOption(event.target.value);
  };
  return (
    <div>
      <div>ReviewFilter</div>
      <label>Sort by </label>
      <select value={props.selected} onChange={sortChangeHandler}>
        <option value="title">title</option>
        <option value="created_at">date</option>
        <option value="votes">votes</option>
        <option value="comment_count">comments</option>
      </select>
    </div>
  );
}

export default ReviewFilter;
