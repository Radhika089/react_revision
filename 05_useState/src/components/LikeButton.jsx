import React, { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(true);

  const toggleLike = () => {
    setLike((prev) => !prev);
  };

  return (
    <div>
      <div>
        <h1>{like ? "❤️ Liked" : "🤍 Like"}</h1>
        <button
          onClick={toggleLike}
          style={{
            padding: "8px",
            margin: "5px",
            background: "red",
            border: "none",
            color: "white",
          }}>
          {like ? "Unlike" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default LikeButton;
