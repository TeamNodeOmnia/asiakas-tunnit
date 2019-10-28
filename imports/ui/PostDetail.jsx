import React from "react";
import { Link } from "react-router-dom";

const PostDetail = props => {
  let post = props.infos.find(post => {
    return post.postId === props.match.params.postId && post;
  });

  const deletePost = () => {
    props.deletefirstInfo(post.postId);
    props.history.push("/posts");
  };

  console.log("post".props);
  return post ? (
    <div className="New-post">
      <div className="users-output">
        <div>
          <span>Title:{post.title}</span>
          <span> ID:{post.postId}</span>
         
          <span> End Time:{post.endTime}</span>
          <p> Content:{post.content}</p>

          <button onClick={props.timeOut}>End Time </button>
          <button onClick={deletePost}>Delete Post</button>
        </div>
      </div>
    </div>
  ) : (
    <Link to="/posts" />
  );
};

export default PostDetail;
