import React from "react";
const Card = (props) => {
  return (
    <div className="cardContainer">
      <div className="Card">
        <div className="img-sec">
          <img src={props.avatar_url} alt={props.login} />
        </div>
        <div className="info-sec">
          <h1>{props.login}</h1>
          <p>{props.bio}</p>
          <p>{props.followers}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
