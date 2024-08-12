import React, { useState } from "react";
import "../Components/Addpost.css";

const AddPost = () => {
  const [title, setTitile] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Post Submitted:", { title, content });

    setTitile("");
    setContent("");
  };

  return (
    <>
      <div>
        <h2 id="title">Create A Post</h2>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitile(e.target.value)}
              required
            />
          </div>
          <br />
          <br />
          <div>
            <label>Content:</label>
            <br />
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <button id="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPost;
