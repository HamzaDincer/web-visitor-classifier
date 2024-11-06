import React from "react";
import { useSelector } from "react-redux";

const Questionnaire = () => {
  const questions = useSelector((state) => state.urlData.questions) || [];

  return (
    <div>
      <h2>Visitor Classification Questions</h2>
      {questions.length > 0 ? (
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      ) : (
        <p>No questions generated. Please submit a URL.</p>
      )}
    </div>
  );
};

export default Questionnaire;
