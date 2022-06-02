import React from "react";

function ReviewOrder(props) {
  //value={props.selected} onChange={sortChangeHandler}

  const orderChangeHandler = (event) => {
    props.selectedOrderOption(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <div>Review Order</div>
      <label>Order by </label>
      <select value={props.selected} onChange={orderChangeHandler}>
        <option value="ASC">accending</option>
        <option value="DESC">descending</option>
      </select>
    </div>
  );
}

export default ReviewOrder;
