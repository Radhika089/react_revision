import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.logo} alt="Logo" />
        <button>
          Save <Bookmark className="bookmark-icon" />
        </button>
      </div>
      <div className="center">
        <h3>
          {props.company} <span>{props.posted}</span>
        </h3>
        <h2>{props.role}</h2>
        <div className="button-div">
          <button>{props.type}</button>
          <button>{props.level}</button>
          <button
            className={
              props.status === "Hiring"
                ? "hiring"
                : props.status === "Closed"
                  ? "closed"
                  : "urgent"
            }>
            {props.status}
          </button>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.salary}</h3>
          <span>{props.location}</span>
        </div>
        <button
          onClick={() =>
            alert(`
            Company: ${props.company}  
            Role: ${props.role}
            Salary: ${props.salary}
            Location: ${props.location}
            `)
          }>
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
