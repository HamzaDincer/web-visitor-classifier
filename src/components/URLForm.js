import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitUrl } from "../redux/actions";

const URLForm = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitUrl(url));
    setUrl("");
  };

  return (
    <div>
      <h2>Enter Website URL for Visitor Classification</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default URLForm;
