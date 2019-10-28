import React from "react";
import { Link } from "react-router-dom";

const Posts = props => {
  // let {match} = props

  return (
    <div className="Post-main">
      <ul>
        <li>
          <Link to="/posts/newpost"> +New Project</Link>
          <Link to="/posts/postdetail"> Project Detail</Link>
        </li>
      </ul>

      <div className="Add-post">
        <div className="Add-post-header">
          <h1> Project Content</h1>
          <div className="post-output">
            {props.infos.map((post, i) => {
              return (
                <div key={"id-" + i}>
                  <Link to={`/posts/${post.postId}`}>
                    <span>Title:{post.title}</span>
                    <span> Start Time :{post.startTime}</span>
                    
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
