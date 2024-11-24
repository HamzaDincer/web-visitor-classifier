import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";

const Questionnaire = () => {
  const questionsAndChoices = useSelector((state) => state.urlData.questions);
  const [responses, setResponses] = useState({});

  const handleSelection = (questionIndex, choice) => {
    setResponses((prev) => ({
      ...prev,
      [questionIndex]: choice,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/profile-visitor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ responses }),
      });
      const data = await response.json();
      alert(`You have been classified as: ${data.profile}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Answer Questions to Discover Your Profile
      </Typography>
      {questionsAndChoices && questionsAndChoices.length > 0 ? (
        questionsAndChoices.map((item, index) => (
          <Card key={index} sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {item.question}
              </Typography>
              <RadioGroup
                name={`question-${index}`}
                onChange={(e) => handleSelection(index, e.target.value)}
              >
                {item.choices.map((choice, choiceIndex) => (
                  <FormControlLabel
                    key={choiceIndex}
                    value={choice}
                    control={<Radio />}
                    label={choice}
                  />
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1" align="center">
          No questions available. Please submit a URL.
        </Typography>
      )}
      {questionsAndChoices && questionsAndChoices.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          sx={{ mt: 3 }}
        >
          Submit Answers
        </Button>
      )}
    </Box>
  );
};

export default Questionnaire;
