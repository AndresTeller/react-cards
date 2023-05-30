import React from "react";

export const Testimonio = (props) => {
  return (
    <div className="card" style={{ backgroundColor: props.color }}>
      <img className="card-image" src={props.image} alt="user" />
      <div className="card-body">
        <p className="card-text">{props.text}</p>
        <div className="card-footer">
          <p className="card-name">{props.name}</p>
          <p className="card-position">{props.position}</p>
        </div>
      </div>
    </div>
  );
}
export default Testimonio;