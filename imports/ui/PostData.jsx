import React from "react";

const PostData = props => {
  return (
    <div >
      <div  onClick={props.getFirstInfo}>
        <span>{props.title}</span>
        <span> {props.category}</span>
        <span>{props.id}</span>
        <p>{props.content}</p>
        <div  />
      </div>
    </div>
  );
};

export default PostData;
