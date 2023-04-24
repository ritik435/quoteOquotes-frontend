import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ quote }) => {
  return (
    <div className="card">
      <p>{quote.slogan}</p>
      <h6>~ {quote.credits} ~</h6>
    </div>
  );
};

export default QuoteCard;
