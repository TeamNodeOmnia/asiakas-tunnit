import React from "react";
import { Link } from "react-router-dom";




const NewPost = props => {
  console.log("from New Post",props);
  return (
    <div className="New-post">
      <div className="input-Post">
        <div className="input-button">
          <Link to="/posts">
            <button 
              onClick={props.getFirstInfo}>
                + Add Project
              </button>
          </Link>
        </div>
        <div className="input-data">
          Title:
          <input type="text" onChange={props.inputTitle} />
          
        </div>
        Content:
        <textarea
          rows="10"
          cols="70"
          name="message"
          onChange={props.inputContent}
        />
      </div>
    </div>
  );
};
export default NewPost;
