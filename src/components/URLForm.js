import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitUrl, storeQuestions } from "../redux/actions";

const URLForm = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/submit-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();

      dispatch(storeQuestions(data.questions));
    } catch (error) {
      console.error("Error:", error);
    }
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
